import models
from config import VERSION

SWAGGER_TEMPLATE = {
    "info": {
        "title": "MEDEA API",
        "description": "API for MEDEA Dashboard",
        "version": VERSION,
        "basePath": "/api"
    },
    "definitions": {
        "SimpleMessage": models.SimpleMessage.get_swagger_schema()
    }
}