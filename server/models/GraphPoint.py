from typing import List, Literal
from models.GraphMarker import GraphMarker

TYPE = Literal[
    "bar",
    "barpolar",
    "box",
    "candlestick",
    "carpet",
    "choropleth",
    "choroplethmapbox",
    "cone",
    "contour",
    "contourcarpet",
    "contourgl",
    "densitymapbox",
    "funnel",
    "funnelarea",
    "heatmap",
    "heatmapgl",
    "histogram",
    "histogram2d",
    "histogram2dcontour",
    "image",
    "indicator",
    "isosurface",
    "mesh3d",
    "ohlc",
    "parcats",
    "parcoords",
    "pie",
    "pointcloud",
    "sankey",
    "scatter",
    "scatter3d",
    "scattercarpet",
    "scattergeo",
    "scattergl",
    "scattermapbox",
    "scatterpolar",
    "scatterpolargl",
    "scatterternary",
    "splom",
    "streamtube",
    "sunburst",
    "surface",
    "table",
    "treemap",
    "violin",
    "volume",
    "waterfall"
]

ORIENTATION = Literal["v", "h"]


class GraphPoint():
    @staticmethod
    def swagger_schema() -> dict:
        return {
            "type": "object",
            "properties": {
                "type": {
                    "type": "string"
                },
                "marker": {
                    "$ref": "#/definitions/GraphMarker"
                },
                "x": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    }
                },
                "y": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    }
                },
                "z": {
                    "type": "array",
                    "items": {
                        "type": "number"
                    }
                },
                "orientation": {
                    "type": "string"
                }
            }
        }

    def __init__(
            self,
            type: TYPE,
            color: str,
            x: List[int] = [],
            y: List[int] = [],
            z: List[int] = [],
            orientation: ORIENTATION = "v") -> None:
        self.type = type
        self.marker = GraphMarker(color)
        self.x = x
        self.y = y
        self.z = z
        self.orientation = orientation
