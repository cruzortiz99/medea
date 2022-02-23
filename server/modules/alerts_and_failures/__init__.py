from constants import DOC_FOLDER
from flasgger import swag_from
from flask import Blueprint, Response, jsonify, request
from models import APIResponseModel, SimpleMessage
from services import alert_vs_closed, down_time
from services import down_time_production_impact, failures_equipments, note_m
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
            list(map(lambda note_m: note_m.__dict__, note_m.get_notes_m3()))
        ).__dict__)


@ALERT_AND_FAILURES.route("/graph/alerted-vs-closed",
                          methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("alerted-vs-closed-graph.yml"))
def alerted_vs_closed_graph() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("ok"))
    return jsonify(APIResponseModel(
        list(map(lambda graph: {
            **graph.__dict__,
            "marker": graph.marker.__dict__
        }, alert_vs_closed.get_alert_vs_closed_graph()))
    ).__dict__)


@ALERT_AND_FAILURES.route("/graph/failures-equipments",
                          methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("failures-equipments-graph.yml"))
def failures_equipments_graph() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("ok"))
    return jsonify(APIResponseModel(
        list(map(lambda graph: {
            **graph.__dict__,
            "marker": graph.marker.__dict__
        }, failures_equipments.get_failures_equipments()))
    ).__dict__)


@ALERT_AND_FAILURES.route("/graph/down-time", methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("down-time-graph.yml"))
def down_time_graph() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("ok"))
    return jsonify(APIResponseModel(
        list(map(lambda graph: {
            **graph.__dict__,
            "marker": graph.marker.__dict__
        }, down_time.get_down_time()))
    ).__dict__)


@ALERT_AND_FAILURES.route("/graph/down-time-production-impact",
                          methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("down-time-graph.yml"))
def down_time_production_impact_graph() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("ok"))
    return jsonify(APIResponseModel(
        list(map(lambda graph: {
            **graph.__dict__,
            "marker": graph.marker.__dict__
        }, down_time_production_impact.get_down_time_production_impact()))
    ).__dict__)
