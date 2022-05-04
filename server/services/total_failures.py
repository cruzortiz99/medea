from typing import List
from models import TotalFailures


def get_total_failures() -> List[TotalFailures]:
    return [
        TotalFailures(
            1,
            "TP-1220",
            "Tapadora de vasos",
            2.0,
            3.0,
            1),
        TotalFailures(
            2,
            "PK-2510",
            "Empacadora de vacio",
            2.0,
            3.0,
            1),
        TotalFailures(
            3,
            "Z-1110",
            "Volteador de tambores",
            2.0,
            3.0,
            1),
        TotalFailures(
            4,
            "HG-1160A",
            "Monogenetizador para queso fundido",
            2.0,
            3.0,
            1),
        TotalFailures(
            5,
            "BD-1130B",
            "Mezclador b materia prima (Blender)",
            2.0,
            3.0,
            1),
    ]
