class UploadCsv():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "csv": {
                    "type": "string"
                }
            }
        }

    def __init__(
            self,
            csv: str):
        self.csv = csv
