from typing import List
from models.GraphPoint import GraphPoint


def get_failures_equipments() -> List[GraphPoint]:
    return [
        GraphPoint("bar", "red", [1, 2, 3], [4, 8, 3]),
        GraphPoint("bar", "blue", [1, 2, 3], [9, 3, ])
    ]
