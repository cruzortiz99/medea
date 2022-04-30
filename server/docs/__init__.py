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
        "SimpleMessage": models.SimpleMessage.swagger_schema(),
        "NoteM": models.NoteM.swagger_schema(),
        "NoteM2": models.NoteM2.swagger_schema(),
        "GraphPoint": models.GraphPoint.swagger_schema(),
        "GraphMarker": models.GraphMarker.swagger_schema(),
        "GraphOfAssignedOrder": models.GraphOfAssignedOrder.swagger_schema()
    }
}
