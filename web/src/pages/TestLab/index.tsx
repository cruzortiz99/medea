import React from "react"
import AppPlot from "../../components/atoms/AppPlot"
import { randomColor } from "../../utils/css"
function TestPage() {
  return (
    <>
      <h2>TestLab</h2>
      <AppPlot
        data={[
          {
            x: [0, 1, 2],
            y: [0, 1, 2],
            marker: { color: randomColor() },
          },
        ]}
        layout={{}}
      />
    </>
  )
}

export default TestPage
