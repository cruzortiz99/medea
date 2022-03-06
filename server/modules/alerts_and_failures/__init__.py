from constants import DOC_FOLDER
from flasgger import swag_from
from flask import Blueprint, Response, jsonify, request
from models import APIResponseModel, SimpleMessage
from services import alert_vs_closed, down_time, down_time_production_impact
from services import equipment_downtime_per_failure as eq_dt_per_failure
from services import failures_equipments, note_m
from services import temporally_repair as temporally_repair_service
from services import total_failures as total_failures_service
from services import total_failures_production_effect as tf_production_effect
from services import equipment_out_off_service
from services import equipment_pf_segment as equipment_pf_segment_service
from services import tpef as tpef_service

ALERT_AND_FAILURES = Blueprint(
    "alert-and-failure",
    __name__,
    url_prefix="/api/alerts-and-failures")


@ALERT_AND_FAILURES.route("/", methods=["GET"])
@swag_from(DOC_FOLDER.joinpath("test.yml"))
def sayHello() -> Response:
    return jsonify(SimpleMessage("Hola mundo").__dict__)

@ALERT_AND_FAILURES.route("/table/note-m2", methods=["GET","OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("note_m2.yml"))
def notes_m2() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(
        APIResponseModel(
            list(map(lambda note_m2: note_m2.__dict__, note_m.get_notes_m2()))
        ).__dict__)


@ALERT_AND_FAILURES.route("/table/note-m3", methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("note_m3.yml"))
def notes_m3() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(
        APIResponseModel(
            list(map(lambda note_m: note_m.__dict__, note_m.get_notes_m3()))
        ).__dict__)


@ALERT_AND_FAILURES.route("/table/total-failures", methods=["OPTIONS", "GET"])
@swag_from(DOC_FOLDER.joinpath("total-failures.yml"))
def total_failures() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(APIResponseModel(
        list(map(lambda failure: failure.__dict__,
                 total_failures_service.get_total_failures()))
    ).__dict__)


@ALERT_AND_FAILURES.route("/table/total-failures-production-effect",
                          methods=["OPTIONS", "GET"])
@swag_from(DOC_FOLDER.joinpath("total-failures-production-effect.yml"))
def total_failures_production_effect() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(APIResponseModel(
        list(map(lambda failure: failure.__dict__,
                 tf_production_effect.get_total_failures_production_effect()))
    ).__dict__)


@ALERT_AND_FAILURES.route("/table/equipment-downtime-per-failure",
                          methods=["OPTIONS", "GET"])
@swag_from(DOC_FOLDER.joinpath("equipment-downtime-per-failure.yml"))
def equipment_downtime_per_failure() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(APIResponseModel(
        list(map(lambda failure: failure.__dict__,
                 eq_dt_per_failure.get_equipment_downtime_per_failure()))
    ).__dict__)


@ALERT_AND_FAILURES.route("/table/temporally-repairs",
                          methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("temporally-repair.yml"))
def temporally_repair() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(APIResponseModel(
        list(map(lambda temporally_rapair: temporally_rapair.__dict__,
                 temporally_repair_service.get_temporally_repairs()))
    ).__dict__)


@ALERT_AND_FAILURES.route("/table/equipments-pf-segment",
                          methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("equipments-segment-pf.yml"))
def equipment_segment_pf() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(APIResponseModel(
        list(map(lambda temporally_rapair: temporally_rapair.__dict__,
                 equipment_pf_segment_service.get_equipments_segment_pf()))
    ).__dict__)


@ALERT_AND_FAILURES.route("/table/equipments-out-off-service",
                          methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("equipments-out-off-service.yml"))
def equipments_out_off_service() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(APIResponseModel(
        list(map(lambda equipment_oos: equipment_oos.__dict__,
                 equipment_out_off_service.get_equipments_out_off_service()))
    ).__dict__)


@ALERT_AND_FAILURES.route("/table/tpef", methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("tpef-table.yml"))
def equipments_tpef() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(APIResponseModel(
        list(map(lambda tpef: tpef.__dict__, tpef_service.get_tpef()))
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


@ALERT_AND_FAILURES.route("/graph/equipments-segment-pf",
                          methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("equipments-segment-pf-graph.yml"))
def equipments_segment_pf() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(
        APIResponseModel(
            list(map(lambda graph: {
                **graph.__dict__,
                "marker": graph.marker.__dict__
            }, equipment_pf_segment_service.
                get_equipments_segment_pf_graph()))
        ).__dict__)


@ALERT_AND_FAILURES.route("/graph/tpef",
                          methods=["GET", "OPTIONS"])
@swag_from(DOC_FOLDER.joinpath("tpef-graph.yml"))
def tpef_graph() -> Response:
    if request.method == "OPTIONS":
        return jsonify(APIResponseModel("Ok"))
    return jsonify(
        APIResponseModel(
            list(map(lambda graph: {
                **graph.__dict__,
                "marker": graph.marker.__dict__
            }, tpef_service.
                get_tpef_graph()))
        ).__dict__)
