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
                position: 1,
                tag: "PK-2510",
                description: "Empaquetadora de vacio",
                notices: 10014964,
                daysDS: 7,
                reper: 3,
                order: 10033815,
                ctec: null,
                noti: null,
                ejec: null,
                emat: null,
                esps: null,
                prog: null,
                startDate: null,
                startTime: null,
                endDate: null,
                endTime: null,
                startFails: "20/10/2021",
              },
              {
                position: 2,
                tag: "TP-1220",
                description: "Tapadora de vasos",
                notices: 10014881,
                daysDS: 27,
                reper: 2,
                order: 10033657,
                ctec: "X",
                noti: "X",
                ejec: null,
                emat: null,
                esps: null,
                prog: null,
                startDate: "30/09/2021",
                startTime: "16:59",
                endDate: "30/09/2021",
                endTime: "17:29",
                startFails: "30/09/2021",
              },
              {
                position: 3,
                tag: "M-2320",
                description: "Maquina ceotrifuga descremadora",
                notices: 10014870,
                daysDS: 29,
                reper: 2,
                order: null,
                ctec: null,
                noti: null,
                ejec: null,
                emat: null,
                esps: null,
                prog: null,
                startDate: null,
                startTime: null,
                endDate: null,
                endTime: null,
                startFails: "28/09/2021",
              },
              {
                position: 4,
                tag: "P-2250",
                description: "Bomba transf. de UDF-4 a homog.(ESF4-S)",
                notices: 10014756,
                daysDS: 46,
                reper: 3,
                order: 10033643,
                ctec: null,
                noti: null,
                ejec: null,
                emat: null,
                esps: null,
                prog: null,
                startDate: null,
                startTime: null,
                endDate: null,
                endTime: null,
                startFails: "11/09/2021",
              },
              {
                position: 5,
                tag: "E-3100",
                description: "Enfriador de crema",
                notices: 10014754,
                daysDS: 47,
                reper: null,
                order: 10033550,
                ctec: null,
                noti: null,
                ejec: null,
                emat: null,
                esps: null,
                prog: null,
                startDate: null,
                startTime: null,
                endDate: null,
                endTime: null,
                startFails: "10/09/2021",
              },
            ]}
            height={500}
            heightHeaderCell={80}
            columns={[
              {
                headerCell: "Pos",
                dataKey: "position",
                minWidthColumn: 50,
                alingColumn: "center"
              },
              {
                headerCell: "TAG",
                dataKey: "tag",
                flexGrowColumn: 1,
                minWidthColumn: 120,
                alingColumn: "left"
              },
              {
                headerCell: "Descripcion",
                dataKey: "description",
                flexGrowColumn: 2,
                minWidthColumn: 300,
                alingColumn: "left"
              },
              {
                headerCell: "Avisos",
                dataKey: "notices",
                flexGrowColumn: 1,
                minWidthColumn: 120,
                alingColumn: "center"
              },
              {
                headerCell: "Dias DS",
                dataKey: "daysDS",
                flexGrowColumn: 1,
                minWidthColumn: 100,
                alingColumn: "center"
              },
              {
                headerCell: "Reper",
                dataKey: "reper",
                flexGrowColumn: 1,
                minWidthColumn: 50,
                alingColumn: "center"
              },
              {
                headerCell: "Orden",
                dataKey: "order",
                flexGrowColumn: 1,
                minWidthColumn: 120,
                alingColumn: "center"
              },
              {
                headerCell: "CTEC",
                dataKey: "ctec",
                flexGrowColumn: 1,
                minWidthColumn: 50,
                alingColumn: "center"
              },
              {
                headerCell: "NOTI",
                dataKey: "noti",
                flexGrowColumn: 1,
                minWidthColumn: 50,
                alingColumn: "center"
              },
              {
                headerCell: "EJEC",
                dataKey: "ejec",
                flexGrowColumn: 1,
                minWidthColumn: 50,
                alingColumn: "center"
              },
              {
                headerCell: "EMAT",
                dataKey: "emat",
                flexGrowColumn: 1,
                minWidthColumn: 50,
                alingColumn: "center"
              },
              {
                headerCell: "ESPS",
                dataKey: "esps",
                flexGrowColumn: 1,
                minWidthColumn: 50,
                alingColumn: "center"
              },
              {
                headerCell: "PROG",
                dataKey: "prog",
                flexGrowColumn: 1,
                minWidthColumn: 50,
                alingColumn: "center"
              },
            ]}
            columnGroups={[
              {
                headers: "Datos de la notificacion",
                alingHeader: "center",
                columns: [
                  {
                    headerCell: "Fecha Inic",
                    dataKey: "startDate",
                    flexGrowColumn: 1,
                    minWidthColumn: 120,
                    alingColumn: "center"
                  },
                  {
                    headerCell: "H. Inic",
                    dataKey: "startTime",
                    flexGrowColumn: 1,
                    minWidthColumn: 100,
                    alingColumn: "center"
                  },
                  {
                    headerCell: "Fecha Fin",
                    dataKey: "endDate",
                    flexGrowColumn: 1,
                    minWidthColumn: 120,
                    alingColumn: "center"
                  },
                  {
                    headerCell: "Hora Fin",
                    dataKey: "endTime",
                    flexGrowColumn: 1,
                    minWidthColumn: 100,
                    alingColumn: "center"
                  },
                ]
              }
            ]}
            extraColumns={[
              {
                headerCell: "Inicio falla",
                dataKey: "startFails",
                flexGrowColumn: 1,
                alingColumn: "center",
                minWidthColumn: 120,
              }
            ]}
            />
    </>
  )
}

export default TestPage
