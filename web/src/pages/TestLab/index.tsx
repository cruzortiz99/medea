import React from "react"
import AppPlot from "../../components/atoms/AppPlot"
import AppTable from "../../components/atoms/AppTable"
import { randomColor } from "../../utils/css"
function TestPage() {
  return (
    <>
      <h2>TestLab</h2>
      <AppTable
      dataTable={[
        {
          data0: "lorem",
          data1: "X",
          data2: 123,
          data3: "lorem",
          data4: 123.123,
          data5: "lorem",
          data6:  123,
          data7: "X",
          data8: "lorem",
          data9: "X",
          data10: 123.123,
          data11: "lorem"
        },
        {
          data0: "lorem",
          data1: "X",
          data2: 123,
          data3: "lorem",
          data4: 123.123,
          data5: "lorem",
          data6:  123,
          data7: "X",
          data8: "lorem",
          data9: "X",
          data10: 123.123,
          data11: "lorem"
        },
        {
          data0: "lorem",
          data1: "X",
          data2: 123,
          data3: "lorem",
          data4: 123.123,
          data5: "lorem",
          data6:  123,
          data7: "X",
          data8: "lorem",
          data9: "X",
          data10: 123.123,
          data11: "lorem"
        },
        {
          data0: "lorem",
          data1: "X",
          data2: 123,
          data3: "lorem",
          data4: 123.123,
          data5: "lorem",
          data6:  123,
          data7: "X",
          data8: "lorem",
          data9: "X",
          data10: 123.123,
          data11: "lorem"
        },
        {
          data0: "lorem",
          data1: "X",
          data2: 123,
          data3: "lorem",
          data4: 123.123,
          data5: "lorem",
          data6:  123,
          data7: "X",
          data8: "lorem",
          data9: "X",
          data10: 123.123,
          data11: "lorem"
        },
        {
          data0: "lorem",
          data1: "X",
          data2: 123,
          data3: "lorem",
          data4: 123.123,
          data5: "lorem",
          data6:  123,
          data7: "X",
          data8: "lorem",
          data9: "X",
          data10: 123.123,
          data11: "lorem"
        },
        {
          data0: "lorem",
          data1: "X",
          data2: 123,
          data3: "lorem",
          data4: 123.123,
          data5: "lorem",
          data6:  123,
          data7: "X",
          data8: "lorem",
          data9: "X",
          data10: 123.123,
          data11: "lorem"
        },
      ]}
      height={500}
      heightHeaderCell={80}
      columns={[
        {
          headerCell: "Data0",
          dataKey: "data0",
          flexGrowColumn: 1,
          minWidthColumn: 100,
          alingColumn: "center"
        },
        {
          headerCell: "Data1",
          dataKey: "data1",
          flexGrowColumn: 1,
          minWidthColumn: 100,
          alingColumn: "center"
        },
        {
          headerCell: "Data2",
          dataKey: "data2",
          flexGrowColumn: 1,
          minWidthColumn: 100,
          alingColumn: "center"
        },
        {
          headerCell: "Data3",
          dataKey: "data3",
          flexGrowColumn: 1,
          minWidthColumn: 100,
          alingColumn: "center"
        },
        {
          headerCell: "Data4",
          dataKey: "data4",
          flexGrowColumn: 1,
          minWidthColumn: 100,
          alingColumn: "center"
        },
      ]}
      columnGroups={[
        {
          headers: "Column0",
          alingHeader: "center",
          columns: [
            {
              headerCell: "Data5",
              dataKey: "data5",
              flexGrowColumn: 1,
              minWidthColumn: 100,
              alingColumn: "center"
            },
            {
              headerCell: "Data6",
              dataKey: "data6",
              flexGrowColumn: 1,
              minWidthColumn: 100,
              alingColumn: "center"
            },
            {
              headerCell: "Data7",
              dataKey: "data7",
              flexGrowColumn: 1,
              minWidthColumn: 100,
              alingColumn: "center"
            },
          ]
        },
        {
          headers: "Column1",
          alingHeader: "center",
          columns: [
            {
              headerCell: "Data8",
              dataKey: "data8",
              flexGrowColumn: 1,
              minWidthColumn: 100,
              alingColumn: "center"
            },
            {
              headerCell: "Data9",
              dataKey: "data9",
              flexGrowColumn: 1,
              minWidthColumn: 100,
              alingColumn: "center"
            },
            {
              headerCell: "Data10",
              dataKey: "data10",
              flexGrowColumn: 1,
              minWidthColumn: 100,
              alingColumn: "center"
            },
          ]
        },
      ]}
      extraColumns={[
        {
          headerCell: "Data11",
          dataKey: "data11",
          flexGrowColumn: 1,
          alingColumn: "center",
          minWidthColumn: 100
        },
      ]}
      />
    </>
  )
}

export default TestPage
