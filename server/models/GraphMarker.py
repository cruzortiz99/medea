class GraphMarker():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "color": {
                    "type": "string"
                }
            }
        }

    def __init__(self, color: str) -> None:
        self.color = color
