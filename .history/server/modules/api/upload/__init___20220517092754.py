from typing import Dict, List
from rx import from_iterable
from rx import operators as rx_op
from constants import DOC_FOLDER
from flasgger import swag_from
from flask import Blueprint, Response, jsonify, request
from models import APIResponseModel
from services import upload_csv as upload_csv_service

UPLOAD = Blueprint(
    "upload",
    __name__,
    url_prefix="/api/upload")


@UPLOAD.route("/csv", methods=["POST", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("file-upload.yml"))
def upload_csv() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)
    response: List[Dict] = from_iterable(request.files.getlist('file1')).pipe(
        rx_op.map(lambda fileData: {
            "file": fileData.filename,
            "size": len(fileData.stream.read())
        }),
        rx_op.do_action(print),
        rx_op.reduce(lambda acc, current: [*acc, current], [])
    ).run()
    upload_csv_service.upload_csv(response)
    return jsonify(APIResponseModel(response).__dict__)
