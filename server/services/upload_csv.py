import pathlib
from typing import Dict, Iterable, List
from werkzeug.datastructures import FileStorage
from werkzeug.utils import secure_filename
from rx import operators as rx_op
from rx import from_iterable
from constants import ASSETS_FOLDER

def upload_csv(csv: Iterable) -> List:
    response: List[Dict] = from_iterable(csv).pipe(
        rx_op.map(lambda file: saveFile(file, '.csv')),
        rx_op.reduce(lambda acc, current: [*acc, current], [])
    ).run()
    return response


def upload_xlsx(xlsx: Iterable) -> List:
    response: List[Dict] = from_iterable(xlsx).pipe(
        rx_op.map(lambda file: saveFile(file, '.xlsx')),
        rx_op.reduce(lambda acc, current: [*acc, current], [])
    ).run()
    return response

def saveFile(file: FileStorage, rule) -> Dict:
    filename = secure_filename(str(file.filename))
    route = str(pathlib.Path(ASSETS_FOLDER)) + '/storage/' + str(rule) + '/' + filename
    path = pathlib.Path(route)
    if path.suffix not in [rule]:
        return {
            "error": filename + ' ' + 'incorrect format',
            "code": 400
        }
    file.save(route)
    return {
        "file": filename,
        "size": len(file.stream.read())
    }
