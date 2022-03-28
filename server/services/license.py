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
        rx_op.catch(lambda _, __: throw(NotFoundError("Lincense not found")))
    )


def create_license() -> License:
    pass


def delete_license() -> str:
    pass
