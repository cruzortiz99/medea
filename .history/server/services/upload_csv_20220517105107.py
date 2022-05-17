import os
from typing import Dict, Iterable, List
from werkzeug.datastructures import FileStorage
from models.UploadCsv import UploadCsv
from rx import operators as rx_op
from rx import from_iterable
from server.main import APP


def upload_csv(csv: Iterable) -> List:
    response: List[Dict] = from_iterable(csv).pipe(
        rx_op.map(saveFile),
        rx_op.reduce(lambda acc, current: [*acc, current], [])
    ).run()
    return response

def saveFile (file: FileStorage) -> List:
    file.save(os.path.join(APP.config['UPLOAD_FOLDER'], file.filename))
    return {
        "file": file.filename,
        "size": len(file.stream.read())
    }
