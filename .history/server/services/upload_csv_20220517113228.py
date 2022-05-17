import os
from pathlib import Path
from typing import Dict, Iterable, List
from werkzeug.datastructures import FileStorage
from werkzeug.utils import secure_filename
from models.UploadCsv import UploadCsv
from rx import operators as rx_op
from rx import from_iterable
from constants import ASSETS_FOLDER


def upload_csv(csv: Iterable) -> List:
    response: List[Dict] = from_iterable(csv).pipe(
        rx_op.map(saveFile),
        rx_op.reduce(lambda acc, current: [*acc, current], [])
    ).run()
    return response

def saveFile (file: FileStorage) -> List:
    route = str(Path(ASSETS_FOLDER)) + '/app/static/files'
    filename = secure_filename(file.filename)
    file.save(os.path.join(route, filename))
    print(file.stream.read())
    return {
        "file": filename,
        "size": len(file.stream.read())
    }