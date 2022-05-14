from flask.wrappers import Request
from constants import DOC_FOLDER
from flasgger import swag_from
from flask import Blueprint, Response, jsonify
from models import APIResponseModel
from services import upload_csv

UPLOAD = Blueprint(
    "upload",
    __name__,
    url_prefix="/api/upload")


@UPLOAD.route("/upload/csv",
                          methods=["POST", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("file_upload.yml"))
def tpef_graph() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)
    return jsonify(
        APIResponseModel(
            upload_csv.uploadFile('Hola')
        ).__dict__)
