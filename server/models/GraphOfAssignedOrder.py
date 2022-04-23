class GraphOfAssignedOrder():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "x": {
                    "type": "array"
                },
                "y": {
                    "type": "array"
                },
                "marker": {
                    "type": "object"
                },
                "type": {
                    "type": "strung"
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
