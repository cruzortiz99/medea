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
        "GraphPoint": models.GraphPoint.swagger_schema(),
        "GraphMarker": models.GraphMarker.swagger_schema(),
        "TotalFailure": models.TotalFailures.swagger_schema(),
        "TotalFailureProductionEffect": models.models.
        TotalFailuresProductionEffect.
        TotalFailuresProductionEffect.swagger_schema(),
        "EquipmentDowntimePerFailure": models.models.
        EquipmentDowntimePerFailure.
        EquipmentDowntimePerFailure.swagger_schema()
    }
}
