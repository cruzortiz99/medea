class UploadCsv():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "string",
            "properties": {
                "url": "string"
            }
        }

    def __init__(
            self,
            url: str):
        self.url = url
