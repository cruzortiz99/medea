from flask import Blueprint, Response, jsonify
from flasgger import swag_from
from constants import DOC_FOLDER
from models import SimpleMessage
ALERT_AND_FAILURES = Blueprint(
    "alert-and-failure",
    __name__,
    url_prefix="/api/alerts-and-failures")


@ALERT_AND_FAILURES.route("/", methods=["GET"])
@swag_from(DOC_FOLDER.joinpath("test.yml"))
def sayHello() -> Response:
    return jsonify(SimpleMessage("Hola mundo").__dict__)
