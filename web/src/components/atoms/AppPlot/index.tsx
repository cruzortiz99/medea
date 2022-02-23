import React from "react"
import createPlotlyComponent from "react-plotly.js/factory"
import BasicPlot from "plotly.js-basic-dist-min"
import { PlotParams } from "react-plotly.js"
import { FlexboxGrid, Loader } from "rsuite"
const Plot = createPlotlyComponent(BasicPlot)

export type AppPlotProps = {
  plotParams: PlotParams
  loading?: boolean
}

function AppPlot(props: AppPlotProps): JSX.Element {
  return (
    <div
      style={{
        minHeight: (props.plotParams.layout.height || 300) * 1.1,
        minWidth: props.plotParams.layout.width,
      }}
    >
      {props.loading ? (
        <FlexboxGrid
          align="middle"
          justify="center"
          style={{
            minHeight: `${(props.plotParams.layout.height || 300) * 1.1}px`,
          }}
        >
          <Loader content="Loading..." />
        </FlexboxGrid>
      ) : (
        <Plot
          {...props}
          layout={{ height: 300, ...props.plotParams.layout }}
          data={props.plotParams.data}
        />
      )}
    </div>
  )
}

export default AppPlot
