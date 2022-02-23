from typing import List
from models.GraphPoint import GraphPoint


def get_alert_vs_closed_graph() -> List[GraphPoint]:
    return [
        GraphPoint("bar", "red", [1, 2, 3], [9, 2, 9]),
        GraphPoint("bar", "blue", [1, 2, 3], [8, 3, 8])
    ]
