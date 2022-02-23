from constants import DOC_FOLDER
from flasgger import swag_from
from flask import Blueprint, Response, jsonify, make_response, request
from models import APIResponseModel, SimpleMessage
from services.note_m import get_notes_m3
from services.alert_vs_closed import get_alert_vs_closed_graph
from services.failures_equipments import get_failures_equipments

ALERT_AND_FAILURES = Blueprint(
    "alert-and-failure",
    __name__,
    url_prefix="/api/alerts-and-failures")


@ALERT_AND_FAILURES.route("/", methods=["GET"])
@swag_from(DOC_FOLDER.joinpath("test.yml"))
def sayHello() -> Response:
    return jsonify(SimpleMessage("Hola mundo").__dict__)


@ALERT_AND_FAILURES.route("/table/note-m3", methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("note_m3.yml"))
def notes_m3() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(
        APIResponseModel(
            list(map(lambda note_m: note_m.__dict__, get_notes_m3()))
        ).__dict__)


@ALERT_AND_FAILURES.route("/graph/alerted-vs-closed",
                          methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("alerted-vs-closed-graph.yml"))
def alerted_vs_closed() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("ok"))
    return jsonify(APIResponseModel(
        list(map(lambda graph: {
            **graph.__dict__,
            "marker": graph.marker.__dict__
        }, get_alert_vs_closed_graph()))
    ).__dict__)


@ALERT_AND_FAILURES.route("/graph/failures-equipments",
                          methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("failures-equipments.yml"))
def failures_equipments() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("ok"))
    return jsonify(APIResponseModel(
        list(map(lambda graph: {
            **graph.__dict__,
            "marker": graph.marker.__dict__
        }, get_failures_equipments()))
    ).__dict__)
