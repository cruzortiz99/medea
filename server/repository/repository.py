import datetime
from typing import Callable, Optional

import pandas
from constants import REPOSITORY_STORAGE


class Repository:
    def __init__(self,
                 input_date: datetime.datetime,
                 med_iw39: str,
                 med_iw69: str,
                 med_iw69e: str,
                 med_ih06: str,
                 med_iw47: str) -> None:
        self.input_date = input_date
        self.med_iw39 = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_iw39))
        self.med_iw39 = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_iw39))
        self.med_iw69 = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_iw69))
        self.med_iw69e = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_iw69e))
        self.med_ih06 = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_ih06))
        self.med_iw47 = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_iw47))

    def sync(self, input_date: datetime.datetime,
             med_iw39: str,
             med_iw69: str,
             med_iw69e: str,
             med_ih06: str,
             med_iw47: str) -> 'Repository':
        self.input_date = input_date
        self.med_iw39 = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_iw39))
        self.med_iw39 = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_iw39))
        self.med_iw69 = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_iw69))
        self.med_iw69e = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_iw69e))
        self.med_ih06 = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_ih06))
        self.med_iw47 = pandas.read_excel(
            REPOSITORY_STORAGE.joinpath(med_iw47))
        return self


def create_repository(
    input_date: datetime.datetime,
    med_iw39: str,
    med_iw69: str,
    med_iw69e: str,
    med_ih06: str,
    med_iw47: str
) -> Callable[[], Repository]:
    instance: Optional[Repository]

    def wrapped():
        nonlocal instance
        if instance is None:
            instance = Repository(
                input_date,
                med_iw39,
                med_iw69,
                med_iw69e,
                med_ih06,
                med_iw47
            )
            return instance
        return instance.sync(
            input_date,
            med_iw39,
            med_iw69,
            med_iw69e,
            med_ih06,
            med_iw47)
    return wrapped
