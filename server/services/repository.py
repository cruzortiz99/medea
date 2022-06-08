from typing import List
from models import Repository
import pathlib
from constants import ASSETS_FOLDER
import pandas as pd
from pandas.core.frame import DataFrame

def getFolders(path: str):
    directory = pathlib.Path(str(ASSETS_FOLDER) + '/storage/' + path)
    if directory.exists():
        if directory.is_file():
            return getFile(directory.suffix, directory)
        
        folders = []
        for folder in directory.iterdir():
            folders.append(Repository(folder.name))
        return folders
    return []

def getFile(suffix: str, directory: str):
    match suffix:
        case '.csv':
            return readCsv(directory)

def readCsv(directory):
    return pd.read_csv(directory, sep=";")