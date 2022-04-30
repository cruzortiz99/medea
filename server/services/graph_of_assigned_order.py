from typing import List
from models.GraphOfAssignedOrder import GraphOfAssignedOrder


def get_graph_of_assigned_order() -> List[GraphOfAssignedOrder]:
    return [
        GraphOfAssignedOrder("bar", "red", [1, 2, 3], [9, 4, 9]),
        GraphOfAssignedOrder("bar", "blue", [1, 2, 3], [8, 3, 8])
    ]
