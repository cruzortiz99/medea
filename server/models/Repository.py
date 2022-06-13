class Repository():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                }
            }
        }

    def __init__(self, name: str) -> None:
        self.name = name
