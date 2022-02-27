class TotalFailuresProductionEffect():
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
                "dt_hours": {
                    "type": "number"
                },
                "r3": {
                    "type": "number"
                },
                "r2": {
                    "type": "number"
                }
            }
        }

    def __init__(
            self,
            position: int,
            tag: str,
            description: str,
            r3: int,
            r2: int,
            amount: int,
            dt_hours: float):
        self.position = position
        self.tag = tag
        self.description = description
        self.r3 = r3
        self.r2 = r2
        self.amount = amount
        self.dt_hours = dt_hours
