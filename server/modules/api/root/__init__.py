from typing import Tuple
import rx.operators as rx_op
from models.APIError import APIError
from flask import Blueprint, jsonify, request, Response, abort
from models.APIResponseModel import APIResponseModel
from models.License import License
from utils.errors import handle_error
from flasgger import swag_from
from constants import DOC_FOLDER
import services.license as license_service
import json
from services import upload_csv as upload_csv_service
from services import repository

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
    return jsonify(response[0], response[1])


@API_ROOT.route("/upload/csv", methods=["POST", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("file-upload.yml"))
def upload_csv() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)

    response = upload_csv_service.upload_csv(request.files.getlist('file'))

    return jsonify(APIResponseModel(response).__dict__)


@API_ROOT.route("/upload/xlsx", methods=["POST", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("file-upload.yml"))
def upload_xlsx() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)

    response = upload_csv_service.upload_xlsx(request.files.getlist('file'))

    return jsonify(APIResponseModel(response).__dict__)


@API_ROOT.route("/repository/folders", methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("repository-folders.yml"))
def folders() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)
    path = ''
    if request.args.get('path'):
        path = str(request.args.get('path'))
        if repository.getFolders(path) == False:
            return abort(400, 'Error in path')
    
    return jsonify(APIResponseModel(list(map(lambda folder: folder.__dict__, repository.getFolders(path)))).__dict__)

