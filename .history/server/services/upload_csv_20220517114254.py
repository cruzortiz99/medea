import os
from pathlib import Path
from typing import Dict, Iterable, List
from werkzeug.datastructures import FileStorage
from werkzeug.utils import secure_filename
from rx import operators as rx_op
from rx import from_iterable
from constants import ASSETS_FOLDER


def upload_csv(csv: Iterable) -> List:
    response: List[Dict] = from_iterable(csv).pipe(
        rx_op.map(saveFile),
        rx_op.reduce(lambda acc, current: [*acc, current], [])
    ).run()
    return response

def saveFile (file: FileStorage) -> Dict:
    route = str(Path(ASSETS_FOLDER)) + '/app/static/files'
    filename = secure_filename(str(file.filename))
    file.save(os.path.join(route, filename))
    file_ext = os.path.splitext(filename)[1]
    if file_ext not in ['.csv']:
        os.abort(400)
    return {
        "file": filename,
        "size": len(file.stream.read())
    }