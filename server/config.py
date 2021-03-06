from typing import Literal

HOST: str = "localhost"
PORT: int = 5000
VERSION: str = "0.1.0"
MODE: Literal["DEV", "PROD"] = "DEV"

PUBLIC_KEY = "medea"

SWAGGER_CONFIG = {
    "headers": [
    ],
    "specs": [
        {
            "endpoint": 'apispec_1',
            "route": '/apispec_1.json',
            "rule_filter": lambda rule: True,  # all in
            "model_filter": lambda tag: True,  # all in
        }
    ],
    "static_url_path": "/flasgger_static",
    # "static_folder": "static",  # must be set by user
    # "swagger_ui": True,
    "specs_route": "/apidocs/",
    "openapi": "3.0.2",
    "uiversion": 3
}
