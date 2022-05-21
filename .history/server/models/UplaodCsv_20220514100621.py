class UploadCsv():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "file",
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
