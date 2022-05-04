from typing import Union
from datetime import date


class EquipmentInPfSegment():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "position": {
                    "type": "number"
                },
                "notice": {
                    "type": "string"
                },
                "tag": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "start_date": {
                    "type": "string"
                },
                "days": {
                    "type": "number"
                },
                "order": {
                    "type": "string"
                },
                "status_odm": {
                    "type": "string"
                },
            }
        }

    def __init__(self,
                 position: int,
                 notice: str,
                 tag: str,
                 description: str,
                 start_date: Union[date, str],
                 days: int,
                 order: str,
                 status_odm: str):
        self.position = position
        self.notice = notice
        self.tag = tag
        self.description = description
        self.start_date = start_date
        self.days = days
        self.order = order
        self.status_odm = status_odm
