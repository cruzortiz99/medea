from typing import Dict, Iterable, List
from flask.wrappers import Request

from werkzeug.datastructures import FileStorage
from models.UploadCsv import UploadCsv
from rx import operators as rx_op
from rx import from_iterable


def upload_csv(csv: Iterable) -> List:
    response: List[Dict] = from_iterable(csv).pipe(
        rx_op.map(lambda fileData: {
            "file": fileData.filename,
            "size": len(fileData.stream.read())
        }),
        lambda fileData: fileData.save(fileData.filename)
        # rx_op.do_action(print),
        rx_op.reduce(lambda acc, current: [*acc, current], [])
    ).run()
    print(response)
    return response