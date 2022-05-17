class UploadCsv():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "file"
        }

    def __init__(
            self,
            csv: str):
        self.csv = csv
