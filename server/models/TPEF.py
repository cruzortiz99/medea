class TPEF():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "position": {
                    "type": "number"
                },
                "tag": {
                    "type": "string"
                },
                "description": {
                    "type": "string"
                },
                "tpef12M": {
                    "type": "number"
                },
                "fall12M": {
                    "type": "number"
                },
                "tpef24M": {
                    "type": "number"
                },
                "fall24M": {
                    "type": "number"
                },
                "percent": {
                    "type": "number"
                },
            }
        }

    def __init__(self,
                 position: int,
                 tag: str,
                 description: str,
                 tpef12M: float,
                 fall12M: int,
                 tpef24M: float,
                 fall24M: int,
                 percent: float):
        self.position = position
        self.tag = tag
        self.description = description
        self.tpef12M = tpef12M
        self.fall12M = fall12M
        self.tpef24M = tpef24M
        self.fall24M = fall24M
        self.percent = percent
