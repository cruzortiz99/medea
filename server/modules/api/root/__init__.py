import json
from datetime import datetime
from typing import Tuple

import rx
import rx.operators as rx_op
import services.license as license_service
from constants import DOC_FOLDER, VALID_DATA_FILES_NAMES
from flasgger import swag_from
from flask import Blueprint, jsonify, request
from models.APIError import APIError
from models.APIResponseModel import APIResponseModel
from models.License import License
from repository import RepositoryBridge, create_repository
from rx import from_iterable
from services import save_upload_files_service
from utils.errors import handle_error
from utils.errors.models import BadRequestError

API_ROOT = Blueprint("api-root", __name__, url_prefix="/api")


@API_ROOT.route("/check-licence/<string:name>/", methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("check-license.yml"))
def check_license(name: str):
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)
    response: Tuple[dict, int] = license_service.check_license(
        name
    ).pipe(
        rx_op.catch(handle_error),
        rx_op.map(
            lambda response: (
                APIResponseModel(response.__dict__).__dict__,
                200 if not isinstance(
                    response, APIError) else response.status_code
            ))
    ).run()
    return jsonify(response[0]), response[1]


@API_ROOT.route("/create-license/<string:name>/", methods=["POST", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("create-license.yml"))
def create_license(name: str):
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)
    body_dic = json.loads(request.data)
    response = license_service.create_license(
        name,
        License(
            body_dic["alert_and_failure"],
            body_dic["orders"],
            body_dic["budget"],
            body_dic["equipment_history"],
            body_dic["preventive_maintenance"],
            body_dic["update_data"],
            body_dic["documentation"],
            body_dic["about"]
        )
    ).pipe(
        rx_op.catch(handle_error),
        rx_op.map(
            lambda response: (
                APIResponseModel(
                    response.__dict__).__dict__,
                200 if not isinstance(
                    response, APIError) else response.status_code))
    ).run()
    return jsonify(response[0]), response[1]


@API_ROOT.route("/delete-license", methods=["DELETE", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("delete-license.yml"))
def delete_license():
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)
    response = license_service.delete_license(
        json.loads(request.data)["name"]
    ).pipe(
        rx_op.catch(handle_error),
        rx_op.map(
            lambda response: (
                APIResponseModel(response).__dict__,
                200 if not isinstance(
                    response, APIError) else response.status_code))
    ).run()
    return jsonify(response[0]), response[1]


@API_ROOT.route("/load-files", methods=["POST", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("upload-files.yml"))
def upload_files():
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("ok").__dict__)
    files = dict(request.files)
    response = from_iterable(VALID_DATA_FILES_NAMES).pipe(
        rx_op.flat_map(lambda valid_name: rx.of(
            valid_name) if valid_name in files else rx.throw(
                BadRequestError("Form must have all files"))),
        rx_op.filter(
            lambda valid_name: valid_name in files and files[
                valid_name].filename.endswith(".xlsx")),
        rx_op.map(lambda valid_file: (files[valid_file], valid_file)),
        rx_op.map(lambda file_and_name: save_upload_files_service.save(
            f"{file_and_name[1]}.xlsx", file_and_name[0].stream.readlines()
        )),
        rx_op.reduce(lambda acc, seed: [*acc, seed], []),
        rx_op.do_action(save_upload_files_service.
                        create_repository)
    ).pipe(
        rx_op.catch(handle_error),
        rx_op.map(lambda response: (
            APIResponseModel(response).__dict__,
            200) if not isinstance(response, APIError) else (
                APIResponseModel(response.__dict__).__dict__,
                response.status_code
        ))
    ).run()
    return jsonify(response[0]), response[1]
