class NoteM():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "executor": {
                    "type": "string"
                },
                "amount": {
                    "type": "number"
                },
                "hours": {
                    "type": "number"
                },
                "with_out_ff": {
                    "type": "number"
                }
            }
        }

    def __init__(
            self,
            excecutor: str,
            amount: int,
            hours: float,
            with_out_ff: int):
        self.excecutor = excecutor
        self.amount = amount
        self.hours = hours
        self.with_out_ff = with_out_ff
