from constants import DOC_FOLDER
from flasgger import swag_from
from flask import Blueprint, Response, jsonify, request, abort
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
    
    response = upload_csv_service.upload_csv(request.files.getlist('csv'))
    
    print(response)
    if response is None:
        abort(400)
    
    return jsonify(APIResponseModel(response).__dict__)
