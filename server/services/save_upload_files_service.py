from datetime import datetime
from typing import List

from constants import REPOSITORY_STORAGE
import repository


def save(filename: str, fileBytes: List[bytes]) -> str:
    file = open(REPOSITORY_STORAGE.joinpath(filename), "wb")
    file.writelines(fileBytes)
    file.close()
    return filename


def create_repository(file_names: List[str]) -> repository.RepositoryBridge:
    return repository.RepositoryBridge(
        repository.create_repository(
            input_date=datetime.now(),
            med_iw39=list(
                filter(
                    lambda file_name: "iw39.xlsx" in file_name,
                    file_names
                )
            )[0],
            med_iw69=list(
                filter(
                    lambda file_name: "iw69.xlsx" in file_name,
                    file_names
                )
            )[0],
            med_iw69e=list(
                filter(
                    lambda file_name: "iw69e.xlsx" in file_name,
                    file_names
                )
            )[0],
            med_iw47=list(
                filter(
                    lambda file_name: "iw47.xlsx" in file_name,
                    file_names
                )
            )[0],
            med_ih06=list(
                filter(
                    lambda file_name: "ih06.xlsx" in file_name,
                    file_names
                )
            )[0]
        )())
