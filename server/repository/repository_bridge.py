import datetime

from repository.repository import Repository


class RepositoryBridge:
    def __init__(self, repository: Repository) -> None:
        self.repository = repository

    def sync(self, input_date: datetime.datetime,
             med_iw39: str,
             med_iw69: str,
             med_iw69e: str,
             med_ih06: str,
             med_iw47: str) -> Repository:
        return self.repository.sync(
            input_date,
            med_iw39,
            med_iw69,
            med_iw69e,
            med_ih06,
            med_iw47)
