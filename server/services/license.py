import json
from pathlib import Path

import rx.operators as rx_op
from constants import ASSETS_FOLDER
from models import License
from rx import of, throw
from rx.core.observable.observable import Observable

from utils.errors.models import NotFoundError


def check_license() -> Observable:
    return of(Path(ASSETS_FOLDER).joinpath("license.json")).pipe(
        rx_op.map(lambda json_path: open(json_path, "r", encoding="utf8")),
        rx_op.map(json.load),
        rx_op.map(lambda licence_dic: License(
            licence_dic["alert_and_failure"],
            licence_dic["orders"],
            licence_dic["budget"],
            licence_dic["equipment_history"],
            licence_dic["preventive_maintenance"],
            licence_dic["update_data"],
            licence_dic["documentation"],
            licence_dic["about"],
        )),
        rx_op.catch(lambda _, __: throw(NotFoundError("Lincense not found")))
    )


def create_license() -> Observable:
    return of(License(
        True, False, False, False, False, False, False, True
    )).pipe(
        rx_op.flat_map(lambda license_data: of(
            Path(ASSETS_FOLDER).joinpath("license.json")
        ).pipe(
            rx_op.map(
                lambda json_path: open(
                    json_path,
                    "w",
                    encoding="utf8")),
            rx_op.do_action(lambda json_file: json.dump(
                license_data.__dict__,
                json_file
            )),
            rx_op.do_action(lambda json_file: json_file.close()),
            rx_op.map(lambda _: license_data)
        ))
    )


def delete_license() -> Observable:
    return of(Path(ASSETS_FOLDER).joinpath("license.json")).pipe(
        rx_op.do_action(lambda json_path: json_path.unlink()),
        rx_op.map(lambda _: "ok"),
        rx_op.catch(lambda _, __: throw(NotFoundError("File not found")))
    )
