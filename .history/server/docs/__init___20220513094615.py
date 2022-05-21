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
        "NoteM3": models.NoteM3.swagger_schema(),
        "NoteM2": models.NoteM2.swagger_schema(),
        "GraphPoint": models.GraphPoint.swagger_schema(),
        "GraphMarker": models.GraphMarker.swagger_schema(),
        "TotalFailure": models.TotalFailures.swagger_schema(),
        "TotalFailureProductionEffect": models.models.
        TotalFailuresProductionEffect.
        TotalFailuresProductionEffect.swagger_schema(),
        "EquipmentDowntimePerFailure": models.models.
        EquipmentDowntimePerFailure.
        EquipmentDowntimePerFailure.swagger_schema(),
        "TemporallyRepair": models.TemporallyRepair.swagger_schema(),
        "EquipmentInPfSegment": models.EquipmentInPfSegment.swagger_schema(),
        "EquipmentOutOffService": models.EquipmentOutOffService.
        swagger_schema(),
        "TPEF": models.TPEF.swagger_schema(),
        "License": models.License.swagger_schema(),
        "APIError": models.APIError.swagger_schema()
        "GraphOfAssignedOrder": models.GraphPoint.swagger_schema(),
        "GraphFailedEquipmentThatAffectedProduction": models.GraphPoint.swagger_schema(),
    }
}
