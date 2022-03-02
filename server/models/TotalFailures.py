class TotalFailures():
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
                "amount": {
                    "type": "number"
                },
                "down_time": {
                    "type": "number"
                },
                "acdt": {
                    "type": "number"
                }
            }
        }

    def __init__(
            self,
            position: int,
            tag: str,
            description: str,
            amount: float,
            down_time: float,
            acdt: int):
        self.position = position
        self.tag = tag
        self.description = description
        self.amount = amount
        self.down_time = down_time
        self.acdt = acdt
