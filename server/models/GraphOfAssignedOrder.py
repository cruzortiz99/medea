from typing import List
from models.GraphMarker import GraphMarker


class GraphOfAssignedOrder():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "type": {
                    "type": "string"
                },
                "marker": {
                    "$ref": "#/definitions/GraphMarker"
                },
                "x": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    }
                },
                "y": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    }
                }
            }
        }

    def __init__(
            self,
            type: str,
            color: str,
            x: List[int] = [],
            y: List[int] = []) -> None:
        self.type = type
        self.marker = GraphMarker(color)
        self.x = x
        self.y = y
