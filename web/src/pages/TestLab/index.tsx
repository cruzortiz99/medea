import React from "react"
import AppPlot from "../../components/atoms/AppPlot"
function TestPage() {
  return (
    <>
      <h2>TestLab</h2>
      <div>
        <AppPlot
          loading
          plotParams={{
            data: [
              {
                x: [1, 2, 3],
                y: [1, 22, 3],
              },
            ],
            layout: {
              width: 400,
            },
          }}
        />
      </div>
    </>
  )
}

export default TestPage
