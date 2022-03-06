from models import GraphPoint, EquipmentInPfSegment
from typing import List


def get_equipments_segment_pf_graph() -> List[GraphPoint]:
    return [
        GraphPoint("bar", "blue", [1, 2, 3], [4, 8, 12])
    ]


def get_equipments_segment_pf() -> List[EquipmentInPfSegment]:
    return [
        EquipmentInPfSegment(1,
                             "10012812",
                             "GM-9601",
                             "Motor de generador G9601",
                             "26/11/2020",
                             335,
                             "10030648",
                             "PROG"),
        EquipmentInPfSegment(2,
                             "10012807",
                             "NV-3250",
                             "Valvula de inyeccion de vapor hiladora",
                             "25/11/2020",
                             336,
                             "10030552",
                             "ESPR"),
        EquipmentInPfSegment(3,
                             "10012482",
                             "NV-97045",
                             "Valvula de suministro L1 a ESF-205",
                             "23/10/2020",
                             369,
                             "10030542",
                             "PROG"),
        EquipmentInPfSegment(4,
                             "10012482",
                             "GM-9600",
                             "Motor de generador G9600",
                             "28/11/2020",
                             394,
                             "10029872",
                             "PROG"),
        EquipmentInPfSegment(5,
                             "10012069",
                             "FD-11508",
                             "Fundidora de queso 500lb (Cosina)",
                             "09/09/2020",
                             413,
                             "10029509",
                             "EMAT")
    ]
