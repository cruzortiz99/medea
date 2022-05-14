from flask.wrappers import Request
from constants import DOC_FOLDER
from flasgger import swag_from
from flask import Blueprint, Response, jsonify, request
from models import APIResponseModel
from services import upload_csv

UPLOAD = Blueprint(
    "upload",
    __name__,
    url_prefix="/api/upload")


@UPLOAD.route("/upload/csv", methods=["POST", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("file-upload.yml"))
def uploadCsv() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok").__dict__)
    
    iFile = request.files.getlist('csv')[0]
    upload_csv.upload_csv(iFile)
    return Response('success')
