from typing import List
from models import GraphPoint, TPEF


def get_tpef_graph() -> List[GraphPoint]:
    return [
        GraphPoint('bar', "red", [9, 4, 9], [1, 2, 3], [], 'h'),
        GraphPoint('bar', "blues", [8, 3, 8], [1, 2, 3], [], 'h')
    ]


def get_tpef() -> List[TPEF]:
    return [
        TPEF(1,
             "NV-3300C",
             "Válvula de descarga de paila D3300C",
             71.67,
             2,
             2967.28,
             3,
             98),
        TPEF(2,
             "FL-1210A",
             "Llenadora de vaso",
             99.3,
             64,
             162.32,
             91,
             39.0),
        TPEF(3,
             "ET-1340",
             "Colocador de mangas",
             152.64,
             43,
             254.69,
             59,
             40),
        TPEF(4,
             "TP-1220",
             "Tapadora de vasos",
             424.85,
             20,
             532.69,
             32,
             20),
        TPEF(5,
             "Z-1360",
             "Envolvedor de cajas (Guillotina)",
             510.61,
             17,
             862.41,
             20,
             20)
    ]
