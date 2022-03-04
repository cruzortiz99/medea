

from datetime import date
from typing import Literal, Union


STATUS = Literal["EMAT", "PROG", "ESPR"]


class TemporallyRepair():
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
                "order": {
                    "type": "string"
                },
                "tag_notice": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "text_order": {
                    "type": "string"
                },
                "start_date": {
                    "type": "string"
                },
                "status": {
                    "type": "string"
                },
                "tag_odm": {
                    "type": "string"
                }
            }
        }

    def __init__(
            self,
            position: int,
            notice: str,
            order: str,
            tag_notice: str,
            description: str,
            text_order: str,
            start_date: Union[date, str],
            status: str,
            tag_odm: str):
        self.position = position
        self.notice = notice
        self.order = order
        self.tag_notice = tag_notice
        self.description = description
        self.text_order = text_order
        self.start_date = start_date
        self.status = status
        self.tag_odm = tag_odm
