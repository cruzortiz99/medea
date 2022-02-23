import React from "react"
import createPlotlyComponent from "react-plotly.js/factory"
import BasicPlot from "plotly.js-basic-dist-min"
import { PlotParams } from "react-plotly.js"
import { Loader } from "rsuite"
const Plot = createPlotlyComponent(BasicPlot)

export type AppPlotProps = {
  plotParams: PlotParams
  loading?: boolean
}

function AppPlot(props: AppPlotProps): JSX.Element {

  if(props.loading === false) {return <Plot {...props} layout={{ height: 300, ...props.plotParams.layout }} data={props.plotParams.data} />}else{return <Loader center size="sm" content="Loading..."/>}
}

export default AppPlot
