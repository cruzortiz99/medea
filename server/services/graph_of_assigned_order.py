from typing import List
from models.GraphPoint import GraphPoint


def get_graph_of_assigned_order() -> List[GraphPoint]:
    return [
        GraphPoint("bar", "red", [1, 2, 3], [9, 4, 9]),
        GraphPoint("bar", "blue", [1, 2, 3], [8, 3, 8])
    ]
