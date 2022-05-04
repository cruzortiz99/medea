from typing import List
from models.TotalFailuresProductionEffect import TotalFailuresProductionEffect


def get_total_failures_production_effect(
) -> List[TotalFailuresProductionEffect]:
    return [
        TotalFailuresProductionEffect(
            1,
            "TP-1220",
            "Tapadora de vasos",
            1,
            1,
            2,
            3.0),
        TotalFailuresProductionEffect(
            2,
            "PK-2510",
            "Empacadora de vacío",
            1,
            1,
            2,
            228.5,
        ),
        TotalFailuresProductionEffect(
            3,
            "Z-1110",
            "Volteador de tambores",
            0,
            1,
            1,
            2.3,
        ),
        TotalFailuresProductionEffect(
            4,
            "HG-1160A",
            "Monogenetizador para queso fundido",
            0,
            1,
            1,
            2.3,
        ),
        TotalFailuresProductionEffect(
            5,
            "BD-1130B",
            "Mezclador b materia prima (Blender)",
            1,
            0,
            1,
            2.4,
        ),
    ]
