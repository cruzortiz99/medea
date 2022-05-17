from typing import Dict, List
from flask.wrappers import Request

from werkzeug.datastructures import FileStorage
from models.UploadCsv import UploadCsv
from rx import operators as rx_op
from rx import from_iterable


def upload_csv(csv: Request) -> List:
    response: List[Dict] = from_iterable(csv).pipe(
        rx_op.map(lambda fileData: {
            "file": fileData.filename,
            "size": len(fileData.stream.read())
        }),
        rx_op.do_action(print),
        rx_op.reduce(lambda acc, current: [*acc, current], [])
    ).run()

    return response