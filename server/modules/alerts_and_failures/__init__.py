from functools import reduce
from typing import List
from flask import Blueprint, Response, jsonify, request
from flasgger import swag_from
from constants import DOC_FOLDER
from models import SimpleMessage, APIResponseModel
from services.note_m import get_notes_m3
ALERT_AND_FAILURES = Blueprint(
    "alert-and-failure",
    __name__,
    url_prefix="/api/alerts-and-failures")


@ALERT_AND_FAILURES.route("/", methods=["GET"])
@swag_from(DOC_FOLDER.joinpath("test.yml"))
def sayHello() -> Response:
    return jsonify(SimpleMessage("Hola mundo").__dict__)


@ALERT_AND_FAILURES.route("/note-m3", methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("note_m3.yml"))
def notes_m3() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    else:
        return jsonify(
            APIResponseModel(
                list(map(lambda note_m: note_m.__dict__, get_notes_m3()))
            ).__dict__)
