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
                },
                "z": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    }
                }
            }
        }

    def __init__(
            self,
            x: List,
            amount: int,
            hours: float,
            with_out_ff: int):
        self.x = x
        self.amount = amount
        self.hours = hours
        self.with_out_ff = with_out_ff
