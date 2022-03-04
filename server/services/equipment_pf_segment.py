from models import GraphPoint
from typing import List


def get_equipments_segment_pf_graph() -> List[GraphPoint]:
    return [
        GraphPoint("bar", "blue", [1, 2, 3], [4, 8, 12])
    ]
