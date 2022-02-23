from typing import List
from models.GraphPoint import GraphPoint


def get_down_time() -> List[GraphPoint]:
    return [
        GraphPoint("bar", "red", [1, 2, 3], [4, 8, 3]),
        GraphPoint("bar", "blue", [1, 2, 3], [9, 3, ])
    ]
