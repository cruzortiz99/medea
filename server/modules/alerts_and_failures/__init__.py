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


@ALERT_AND_FAILURES.route("/calc/<int:num1>/<int:num2>", methods=["GET"])
@swag_from(DOC_FOLDER.joinpath("calc.yml"))
def calc(num1: int, num2: int) -> Response:
    return jsonify(SimpleMessage(f"{add(num1,num2)}").__dict__)


def add(num1: int, num2: int) -> int:
    return num1 + num2
