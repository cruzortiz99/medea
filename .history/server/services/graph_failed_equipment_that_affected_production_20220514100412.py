from typing import List
from models.GraphPoint import GraphPoint


def graph_failed_equipment_that_affected_production() -> List[GraphPoint]:
    return [
        GraphPoint("bar", "red", [1, 2, 3], [9, 4, 9]),
        GraphPoint("bar", "blue", [1, 2, 3], [8, 3, 8]),
        GraphPoint("bar", "green", [1, 2, 3], [17, 7, 17]),
    ]
