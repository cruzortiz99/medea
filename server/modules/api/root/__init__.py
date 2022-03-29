from typing import Tuple
import rx.operators as rx_op
import services.license as license_service
from flask import Blueprint, jsonify, request
from models.APIResponseModel import APIResponseModel
from utils.errors import handle_error
from flasgger import swag_from
from constants import DOC_FOLDER

API_ROOT = Blueprint("api-root", __name__, url_prefix="/api")


@API_ROOT.route("/check-licence", methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("check-license.yml"))
def check_license():
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)
    response: Tuple[dict, int] = license_service.check_license().pipe(
        rx_op.catch(handle_error),
        rx_op.map(
            lambda response: (
                APIResponseModel(response.__dict__).__dict__,
                200 if not isinstance(
                    response, Exception) else response.status_code
            ))
    ).run()
    return jsonify(response[0]), response[1]


@API_ROOT.route("/create-license", methods=["POST", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("create-license.yml"))
def create_license():
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)
    response = license_service.create_license().pipe(
        rx_op.catch(handle_error),
        rx_op.map(
            lambda response: (
                APIResponseModel(
                    response.__dict__).__dict__,
                200 if not isinstance(
                    response, Exception) else response.status_code))
    ).run()
    return jsonify(response[0]), response[1]


@API_ROOT.route("/delete-license", methods=["DELETE", "OPTIONS"])
def delete_license():
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)
    response = license_service.delete_license().pipe(
        rx_op.catch(handle_error),
        rx_op.map(
            lambda response: (
                APIResponseModel(response).__dict__,
                200 if not isinstance(
                    response, Exception) else response.status_code))
    ).run()
    return jsonify(response[0], response[1])
