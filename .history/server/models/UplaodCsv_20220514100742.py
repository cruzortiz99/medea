from werkzeug.datastructures import FileStorage


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
            csv: FileStorage):
        self.csv = csv
