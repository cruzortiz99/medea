import models

SWAGGER_TEMPLATE = {
    "info": {
        "title": "MEDEA API",
        "description": "API for MEDEA Dashboard",
        "version": "0.0.1",
        "basePath": "/api"
    },
    "definitions": {
        "SimpleMessage": models.SimpleMessage.get_swagger_schema()
    }
}