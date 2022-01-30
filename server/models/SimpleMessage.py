class SimpleMessage():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "message": {
                    "type": "string"
                }
            },
            "example": {
                "message": "Hola Mundo"
            }
        }

    def __init__(self, message: str):
        self.message = message
