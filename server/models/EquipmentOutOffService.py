from datetime import date
from typing import Union


class EquipmentOutOffService():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "position": {
                    "type": "number"
                },
                "tag": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "notices": {
                    "type": "string"
                },
                "days_ds": {
                    "type": "number"
                },
                "reper": {
                    "type": "number"
                },
                "order": {
                    "type": "string"
                },
                "ctec": {
                    "type": "string"
                },
                "noti": {
                    "type": "string"
                },
                "ejec": {
                    "type": "string"
                },
                "emat": {
                    "type": "string"
                },
                "esps": {
                    "type": "string"
                },
                "prog": {
                    "type": "string"
                },
                "start_date": {
                    "type": "string"
                },
                "start_time": {
                    "type": "string"
                },
                "end_date": {
                    "type": "string"
                },
                "end_time": {
                    "type": "string"
                },
                "start_fails": {
                    "type": "string"
                },
            }
        }

    def __init__(self,
                 position: int,
                 tag: str,
                 description: str,
                 notices: str,
                 days_ds: int,
                 reper: int,
                 order: str,
                 ctec: str,
                 noti: str,
                 ejec: str,
                 emat: str,
                 esps: str,
                 prog: str,
                 start_date: Union[date, str],
                 start_time: Union[date, str],
                 end_date: Union[date, str],
                 end_time: Union[date, str],
                 start_fails: Union[date, str]):
        self.position = position
        self.tag = tag
        self.description = description
        self.notices = notices
        self.days_ds = days_ds
        self.reper = reper
        self.order = order
        self.ctec = ctec
        self.noti = noti
        self.ejec = ejec
        self.emat = emat
        self.esps = esps
        self.prog = prog
        self.start_date = start_date
        self.start_time = start_time
        self.end_date = end_date
        self.end_time = end_time
        self.start_fails = start_fails
