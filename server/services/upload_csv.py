import os
from pathlib import Path
from typing import Dict, Iterable, List
from werkzeug.datastructures import FileStorage
from werkzeug.utils import secure_filename
from rx import operators as rx_op
from rx import from_iterable
from constants import ASSETS_FOLDER
# TODO: No usar parámetros globales de esta forma, debes pasar la información
# a las funciones via parámetros
rule = '.csv'


def upload_csv(csv: Iterable) -> List:
    global rule
    rule = '.csv'
    response: List[Dict] = from_iterable(csv).pipe(
        rx_op.map(saveFile),
        rx_op.reduce(lambda acc, current: [*acc, current], [])
    ).run()
    return response


def upload_xlsx(xlsx: Iterable) -> List:
    global rule
    rule = '.xlsx'
    response: List[Dict] = from_iterable(xlsx).pipe(
        rx_op.map(saveFile),
        rx_op.reduce(lambda acc, current: [*acc, current], [])
    ).run()
    return response

# TODO: Se debe guardar el archivo en en assets/storage/...
# Usa la clase Path de python no el os.path


def saveFile(file: FileStorage) -> Dict:
    filename = secure_filename(str(file.filename))
    file_ext = os.path.splitext(filename)[1]
    # TODO: pasar rule via parámetros no variable global
    if file_ext not in [rule]:
        return {
            "error": filename + ' ' + 'incorrect format',
            "code": 400
        }
    route = str(Path(ASSETS_FOLDER)) + '/app/static/files/' + str(file_ext)
    file.save(os.path.join(route, filename))

    return {
        "file": filename,
        "size": len(file.stream.read())
    }
