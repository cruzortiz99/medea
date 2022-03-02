from typing import List
from models.EquipmentDowntimePerFailure import EquipmentDowntimePerFailure


def get_equipment_downtime_per_failure() -> List[EquipmentDowntimePerFailure]:
    return [
        EquipmentDowntimePerFailure(
            1,
            "TP-1220",
            "Tapadora de vasos",
            2.0,
            3.0,
            1),
        EquipmentDowntimePerFailure(
            2,
            "PK-2510",
            "Empacadora de vacio",
            2.0,
            3.0,
            1),
        EquipmentDowntimePerFailure(
            3,
            "Z-1110",
            "Volteador de tambores",
            2.0,
            3.0,
            1),
        EquipmentDowntimePerFailure(
            4,
            "HG-1160A",
            "Monogenetizador para queso fundido",
            2.0,
            3.0,
            1),
        EquipmentDowntimePerFailure(
            5,
            "BD-1130B",
            "Mezclador b materia prima (Blender)",
            2.0,
            3.0,
            1),
    ]
