import React from "react"
import createPlotlyComponent from "react-plotly.js/factory"
import BasicPlot from "plotly.js-basic-dist-min"
import { PlotParams } from "react-plotly.js"
const Plot = createPlotlyComponent(BasicPlot)

export type AppPlotProps = PlotParams

function AppPlot(props: AppPlotProps): JSX.Element {
  return <Plot {...props} layout={{ height: 300, ...props.layout }} />
}

export default AppPlot
