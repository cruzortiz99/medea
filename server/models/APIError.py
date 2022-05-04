class APIError(Exception):
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "name": {
                    "type": "number"
                },
                "message": {
                    "type": "string"
                },
                "status_code": {
                    "type": "string"
                },
            }
        }

    def __init__(
            self,
            name: str,
            message: str,
            status_code: int,
            *args: object) -> None:
        super().__init__(*args)
        self.name = name
        self.message = message
        self.status_code = status_code
