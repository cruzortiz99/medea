from flask import Blueprint
from werkzeug.wrappers.response import Response

ALERT_AND_FAILURE_APP = Blueprint(
  "alert_and_failures",
  __name__,
  url_prefix="alert-and-failures"
)

@ALERT_AND_FAILURE_APP.route("/", methods=["GET"])
def test() -> str :
  return f"Hola desde ruta alert and failure"

@ALERT_AND_FAILURE_APP.route("/otro", methods=["GET", "OPTIONS"])
def test2() -> str:
  return f"Hola desde otra ruta"