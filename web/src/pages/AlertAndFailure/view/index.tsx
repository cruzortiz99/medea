import React, { ReactNode, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { Col, Divider, Grid, Row, Table } from "rsuite"
import AppPlot from "../../../components/atoms/AppPlot"
import AppPanel from "../../../components/atoms/Panel"
import AppPanelContainer from "../../../components/atoms/PanelContainer"
import AppSimplePageTemplate from "../../../components/templates/AppSimplePageTemplate"
import AppTable from "../../../components/atoms/AppTable"
import { PAGE_URL } from "../../../constants"
import { joinClasses, randomColor } from "../../../utils/css"
import { useScreenDimension } from "../../../utils/screen/hooks"
import styles from "./AlertAndFailurePage.module.css"
export type AlertAndFailurePageViewProps = {
  plantName: ReactNode
  monthAndYear: ReactNode
  subtitles: { label: ReactNode; id: string }[]
}

function AlertAndFailurePageView(
  props: AlertAndFailurePageViewProps
): JSX.Element {
  const hashName = useLocation().hash
  const refContainerBigGraph = useRef<HTMLDivElement | null>(null)
  const refContainerMedGraph = useRef<HTMLDivElement | null>(null)
  const screen = useScreenDimension()
  const [colors] = useState<string[]>([
    randomColor(),
    randomColor(),
    randomColor(),
  ])

  const breadCrumbLinks = props.subtitles
    .filter(
      (subtitle, key) =>
        !!hashName.match(subtitle.id) || (hashName === "" && key === 0)
    )
    .map((subtitle) => ({
      label: subtitle.label,
      href: subtitle.id,
      active: true,
    }))
    .reduce<{ label: ReactNode; href: string; active?: boolean }[]>(
      (acc, current) => (acc.length === 1 ? [...acc, current] : acc),
      [
        {
          label: "Avisos y Fallas",
          href: `${PAGE_URL.ALERTS_FAILURES}#${props.subtitles[0].id}`,
        },
      ]
    )
  return (
    <AppSimplePageTemplate
      mainTitle={props.plantName}
      mainDescription={props.monthAndYear}
      breadcrumbLinks={breadCrumbLinks}
      dateFilter={[
        {label: "Enero 2021"},
        {label: "Febrero 2021"},
        {label: "Marzo 2021"},
        {label: "Abril 2021"},
        {label: "Mayo 2021"},
        {label: "Junio 2021"},
        {label: "Julio 2021"},
        {label: "Agosto 2021"},
        {label: "Septiembre 2021"},
        {label: "Octubre 2021"},
        {label: "Noviembre 2021", active: true},
        {label: "Diciembre 2021"}
      ]}
      equipementFilter={[
        {label: "Equipo A", active: true},
        {label: "Equipo B"},
        {label: "Equipo C"},
        {label: "Equipo D"},
      ]}
      processFilter={[
        {label: "Proceso 1", active: true},
        {label: "Proceso 2"},
        {label: "Proceso 3"},
        {label: "Proceso 4"},
        {label: "Proceso 5"},
      ]}
    >
      <h4 id={props.subtitles[0].id}>{props.subtitles[0].label}</h4>
      <Divider />
      <AppPanelContainer>
        <Col xs={24} lg={16}>
          <Row>
            <div ref={refContainerBigGraph}>
              <AppPanel>
                <AppPlot
                  layout={{
                    title: "Avisos Emitidos vs Concluidos",
                    width:
                      (refContainerBigGraph.current?.clientWidth ||
                        screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                  }}
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [9, 4, 9],
                      marker: { color: colors[0] },
                      type: "bar",
                    },
                    {
                      x: [1, 2, 3],
                      y: [8, 3, 8],
                      marker: { color: colors[1] },
                      type: "bar",
                    },
                  ]}
                />
              </AppPanel>
            </div>
          </Row>
          <Row>
            <AppPanel>
              <AppPlot
                layout={{
                  title: "Avisos sin ordenes Asignadas",
                  width:
                    (refContainerBigGraph.current?.clientWidth ||
                      screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                }}
                data={[
                  {
                    x: [1, 2, 3],
                    y: [9, 4, 9],
                    marker: { color: colors[0] },
                    type: "bar",
                  },
                  {
                    x: [1, 2, 3],
                    y: [8, 3, 8],
                    marker: { color: colors[1] },
                    type: "bar",
                  },
                ]}
              />
            </AppPanel>
          </Row>
        </Col>
        <Col xs={24} lg={8} className={styles.padding0}>
          <AppPanel>
            <Col
              xs={24}
              md={11}
              lg={24}
              className={joinClasses(styles.padding0, styles.margin10)}
            >
              <strong>Avisos M2</strong>
              <AppTable
              height={260}
              dataTable={[
                {
                  executor: "Operador",
                  amount: 0,
                  hours: 0.0,
                  sinFF: 0,
                },
                {
                  executor: "Mantenedor",
                  amount: 0,
                  hours: 0.0,
                  sinFF: 0,
                },
                {
                  executor: "Sin inform",
                  amount: 0,
                  hours: 0.0,
                  sinFF: 0,
                },
                {
                  executor: "Total",
                  amount: 0,
                  hours: 0.0,
                  sinFF: 0,
                },
              ]}
              columns={[
                {
                  headerCell: "Ejecutor",
                  dataKey: "executor",
                  flexGrowColumn: 1,
                  alingColumn: "left",
                  minWidthColumn: 100
                },
                {
                  headerCell: "cantidad",
                  dataKey: "amount",
                  flexGrowColumn: 1,
                  alingColumn: "center",
                  minWidthColumn: 50
                },
                {
                  headerCell: "Horas",
                  dataKey: "hours",
                  flexGrowColumn: 1,
                  alingColumn: "center",
                  minWidthColumn: 50
                },
                {
                  headerCell: "Sin FF",
                  dataKey: "sinFF",
                  flexGrowColumn: 1,
                  alingColumn: "center",
                  minWidthColumn: 50
                },
              ]}
              />
            </Col>
            <Col
              xs={24}
              md={11}
              lg={24}
              className={joinClasses(styles.padding0, styles.margin10)}
            >
              <strong>Avisos M3</strong>
              <AppTable
              height={260}
              dataTable={[
                {
                  executor: "Operador",
                  amount: 0,
                  hours: 0.0,
                  sinFF: 0,
                },
                {
                  executor: "Mantenedor",
                  amount: 0,
                  hours: 0.0,
                  sinFF: 0,
                },
                {
                  executor: "Sin inform",
                  amount: 0,
                  hours: 0.0,
                  sinFF: 0,
                },
                {
                  executor: "Total",
                  amount: 0,
                  hours: 0.0,
                  sinFF: 0,
                },
              ]}
              columns={[
                {
                  headerCell: "Ejecutor",
                  dataKey: "executor",
                  flexGrowColumn: 1,
                  alingColumn: "left",
                  minWidthColumn: 100
                },
                {
                  headerCell: "cantidad",
                  dataKey: "amount",
                  flexGrowColumn: 1,
                  alingColumn: "center",
                  minWidthColumn: 50
                },
                {
                  headerCell: "Horas",
                  dataKey: "hours",
                  flexGrowColumn: 1,
                  alingColumn: "center",
                  minWidthColumn: 50
                },
                {
                  headerCell: "Sin FF",
                  dataKey: "sinFF",
                  flexGrowColumn: 1,
                  alingColumn: "center",
                  minWidthColumn: 50
                },
              ]}
              />
            </Col>
          </AppPanel>
        </Col>
      </AppPanelContainer>
      <br />
      <h4 id={props.subtitles[1].id}>{props.subtitles[1].label}</h4>
      <Divider />
      <AppPanelContainer>
        <Row>
          <Col xs={24} lg={12}>
            <Row>
              <div ref={refContainerMedGraph}>
                <AppPanel>
                  <AppPlot
                    layout={{
                      title: "Cantidad de fallas de equipos",
                      width:
                        (refContainerMedGraph.current?.clientWidth ||
                          screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                    }}
                    data={[
                      {
                        x: [1, 2, 3],
                        y: [9, 4, 9],
                        marker: { color: colors[0] },
                        type: "bar",
                      },
                      {
                        x: [1, 2, 3],
                        y: [8, 3, 8],
                        marker: { color: colors[1] },
                        type: "bar",
                      },
                    ]}
                  />
                </AppPanel>
              </div>
            </Row>
            <Row>
              <AppPanel>
                <AppPlot
                  layout={{
                    title: "Down Time(horas)",
                    width:
                      (refContainerMedGraph.current?.clientWidth ||
                        screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                  }}
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [9, 4, 9],
                      marker: { color: colors[0] },
                      type: "bar",
                    },
                    {
                      x: [1, 2, 3],
                      y: [8, 3, 8],
                      marker: { color: colors[1] },
                      type: "bar",
                    },
                  ]}
                />
              </AppPanel>
            </Row>
          </Col>
          <Col xs={24} lg={12}>
            <Row>
              <AppPanel>
                <AppPlot
                  layout={{
                    title:
                      "Cantidad de fallas de equipos con <br>paro o limitación de producción",
                    width:
                      (refContainerMedGraph.current?.clientWidth ||
                        screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                  }}
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [9, 4, 9],
                      marker: { color: colors[0] },
                      type: "bar",
                    },
                    {
                      x: [1, 2, 3],
                      y: [8, 3, 8],
                      marker: { color: colors[1] },
                      type: "bar",
                    },
                    {
                      x: [1, 2, 3],
                      y: [17, 7, 17],
                      marker: { color: colors[2] },
                    },
                  ]}
                />
              </AppPanel>
            </Row>
            <Row>
              <AppPanel>
                <AppPlot
                  layout={{
                    title: "Down time con <br> impacto a la producción",
                    width:
                      (refContainerMedGraph.current?.clientWidth ||
                        screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                  }}
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [9, 4, 9],
                      marker: { color: colors[0] },
                      type: "bar",
                    },
                    {
                      x: [1, 2, 3],
                      y: [8, 3, 8],
                      marker: { color: colors[1] },
                      type: "bar",
                    },
                  ]}
                />
              </AppPanel>
            </Row>
          </Col>
        </Row>
        <Row>
          <AppPanel>
            <Grid className={styles.fullWidth} fluid>
              <Col xs={24} lg={12}>
                <strong>Total fallas</strong>
                <AppTable
                dataTable={[
                  {
                    position: 1,
                    tag: "TP-1220",
                    description: "Tapadora de vasos",
                    amount: 2,
                    downTime: 3.00,
                    acdt: 1,
                  },
                  {
                    position: 2,
                    tag: "PK-2510",
                    description: "Empacadora de vacio",
                    amount: 2,
                    downTime: 913.84,
                    acdt: 1,
                  },
                  {
                    position: 3,
                    tag: "Z-1110",
                    description: "Volteador de tambores",
                    amount: 1,
                    downTime: 0.00,
                    acdt: 0,
                  },
                  {
                    position: 4,
                    tag: "HG-1160A",
                    description: "Monogenetizador para queso fundido",
                    amount: 1,
                    downTime: 9.00,
                    acdt: 1,
                  },
                  {
                    position: 5,
                    tag: "BD-1130B",
                    description: "Mezclador b materia prima (Blender)",
                    amount: 1,
                    downTime: 9.54,
                    acdt: 1,
                  },
                ]}
                height={320}
                columns={[
                  {
                    headerCell: "Pos",
                    dataKey: "position",
                    alingColumn: "center",
                    minWidthColumn: 50,
                  },
                  {
                    headerCell: "TAG",
                    dataKey: "tag",
                    flexGrowColumn: 1,
                    alingColumn: "left",
                    minWidthColumn: 120,
                  },
                  {
                    headerCell: "Descripcion",
                    dataKey: "description",
                    flexGrowColumn: 2,
                    alingColumn: "left",
                    minWidthColumn: 300,
                  },
                  {
                    headerCell: "Cant.",
                    dataKey: "amount",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 100,
                  },
                  {
                    headerCell: "Down time Hrs",
                    dataKey: "downTime",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 120,
                  },
                  {
                    headerCell: "ACDT",
                    dataKey: "acdt",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 100,
                  },
                ]}
                />
              </Col>
              <Col xs={24} lg={12}>
                <strong>Total fallas con paro o limitacion de la produccion</strong>
                <AppTable
                dataTable={[
                  {
                    position: 1,
                    tag: "TP-1220",
                    description: "Tapadora de vasos",
                    r3: 1,
                    r2: 1,
                    amount: 2,
                    dtHours: 3.0,
                  },
                  {
                    position: 2,
                    tag: "PK-2510",
                    description: "Empacadora de vacio",
                    r3: 1,
                    r2: 1,
                    amount: 2,
                    dtHours: 228.5,
                  },
                  {
                    position: 3,
                    tag: "Z-1110",
                    description: "Volteador de tambores",
                    r3: 0,
                    r2: 1,
                    amount: 1,
                    dtHours: 2.3,
                  },
                  {
                    position: 4,
                    tag: "HG-1160A",
                    description: "Monogenetizador para queso fundido",
                    r3: 0,
                    r2: 1,
                    amount: 1,
                    dtHours: 2.3,
                  },
                  {
                    position: 5,
                    tag: "BD-1130B",
                    description: "Mezclador b materia prima (Blender)",
                    r3: 1,
                    r2: 0,
                    amount: 1,
                    dtHours: 2.4,
                  },
                ]}
                height={320}
                columns={[
                  {
                    headerCell: "Pos",
                    dataKey: "position",
                    alingColumn: "center",
                    minWidthColumn: 50
                  },
                  {
                    headerCell: "TAG",
                    dataKey: "tag",
                    flexGrowColumn: 1,
                    alingColumn: "left",
                    minWidthColumn: 120
                  },
                  {
                    headerCell: "Descripcion",
                    dataKey: "description",
                    flexGrowColumn: 2,
                    alingColumn: "left",
                    minWidthColumn: 300
                  },
                  {
                    headerCell: "#R3",
                    dataKey: "r3",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 100
                  },
                  {
                    headerCell: "#R2",
                    dataKey: "r2",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 100
                  },
                  {
                    headerCell: "Cant.",
                    dataKey: "amount",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 100
                  },
                  {
                    headerCell: "DT Hrs",
                    dataKey: "dtHours",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 120
                  },
                ]}
                />
              </Col>
            </Grid>
          </AppPanel>
        </Row>
        <Row>
          <AppPanel>
            <Grid className={styles.fullWidth} fluid>
              <Col xs={24} lg={12}>
                <strong>Equipos con mayor down time por fallas</strong>
                <AppTable
                dataTable={[
                  {
                    position: 1,
                    tag: "TP-1220",
                    description: "Tapadora de vasos",
                    amount: 2,
                    downTime: 3.00,
                    acdt: 1,
                  },
                  {
                    position: 2,
                    tag: "PK-2510",
                    description: "Empacadora de vacio",
                    amount: 2,
                    downTime: 913.84,
                    acdt: 1,
                  },
                  {
                    position: 3,
                    tag: "Z-1110",
                    description: "Volteador de tambores",
                    amount: 1,
                    downTime: 0.00,
                    acdt: 0,
                  },
                  {
                    position: 4,
                    tag: "HG-1160A",
                    description: "Monogenetizador para queso fundido",
                    amount: 1,
                    downTime: 9.00,
                    acdt: 1,
                  },
                  {
                    position: 5,
                    tag: "BD-1130B",
                    description: "Mezclador b materia prima (Blender)",
                    amount: 1,
                    downTime: 9.54,
                    acdt: 1,
                  },
                ]}
                height={320}
                columns={[
                  {
                    headerCell: "Pos",
                    dataKey: "position",
                    alingColumn: "center",
                    minWidthColumn: 50,
                  },
                  {
                    headerCell: "TAG",
                    dataKey: "tag",
                    flexGrowColumn: 1,
                    alingColumn: "left",
                    minWidthColumn: 120,
                  },
                  {
                    headerCell: "Descripcion",
                    dataKey: "description",
                    flexGrowColumn: 2,
                    alingColumn: "left",
                    minWidthColumn: 300,
                  },
                  {
                    headerCell: "Cant.",
                    dataKey: "amount",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 100,
                  },
                  {
                    headerCell: "Down time Hrs",
                    dataKey: "downTime",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 120,
                  },
                  {
                    headerCell: "ACDT",
                    dataKey: "acdt",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 100,
                  },
                ]}
                />
              </Col>
              <Col xs={24} lg={12}>
                <strong>Equipos con mayor down time e impacto en la produccion</strong>
                <AppTable
                dataTable={[
                  {
                    position: 1,
                    tag: "TP-1220",
                    description: "Tapadora de vasos",
                    r3: 1,
                    r2: 1,
                    amount: 2,
                    dtHours: 3.0,
                  },
                  {
                    position: 2,
                    tag: "PK-2510",
                    description: "Empacadora de vacio",
                    r3: 1,
                    r2: 1,
                    amount: 2,
                    dtHours: 228.5,
                  },
                  {
                    position: 3,
                    tag: "Z-1110",
                    description: "Volteador de tambores",
                    r3: 0,
                    r2: 1,
                    amount: 1,
                    dtHours: 2.3,
                  },
                  {
                    position: 4,
                    tag: "HG-1160A",
                    description: "Monogenetizador para queso fundido",
                    r3: 0,
                    r2: 1,
                    amount: 1,
                    dtHours: 2.3,
                  },
                  {
                    position: 5,
                    tag: "BD-1130B",
                    description: "Mezclador b materia prima (Blender)",
                    r3: 1,
                    r2: 0,
                    amount: 1,
                    dtHours: 2.4,
                  },
                ]}
                height={320}
                columns={[
                  {
                    headerCell: "Pos",
                    dataKey: "position",
                    alingColumn: "center",
                    minWidthColumn: 50
                  },
                  {
                    headerCell: "TAG",
                    dataKey: "tag",
                    flexGrowColumn: 1,
                    alingColumn: "left",
                    minWidthColumn: 120
                  },
                  {
                    headerCell: "Descripcion",
                    dataKey: "description",
                    flexGrowColumn: 2,
                    alingColumn: "left",
                    minWidthColumn: 300
                  },
                  {
                    headerCell: "#R3",
                    dataKey: "r3",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 100
                  },
                  {
                    headerCell: "#R2",
                    dataKey: "r2",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 100
                  },
                  {
                    headerCell: "Cant.",
                    dataKey: "amount",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 100
                  },
                  {
                    headerCell: "DT Hrs",
                    dataKey: "dtHours",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 120
                  },
                ]}
                />
              </Col>
            </Grid>
          </AppPanel>
        </Row>
        <Row>
          <AppPanel>
            <Grid className={styles.fullWidth} fluid>
              <Col xs={24} lg={12}>
                <strong>TPEF</strong>
                <AppTable
                dataTable={[
                  {
                    position: 1,
                    tag: "NV-3300C",
                    description: "Valvulade descarga de paila D3300C",
                    tpef12M: 71.67,
                    fall12M: 2,
                    tpef24M: 2967.28,
                    fall24M: 3,
                    percent: 98,
                  },
                  {
                    position: 2,
                    tag: "FL-1210A",
                    description: "Llenadora de vaso",
                    tpef12M: 99.30,
                    fall12M: 64,
                    tpef24M: 162.32,
                    fall24M: 91,
                    percent: 39,
                  },
                  {
                    position: 3,
                    tag: "ET-1340",
                    description: "Colocador de mangas",
                    tpef12M: 152.64,
                    fall12M: 43,
                    tpef24M: 254.69,
                    fall24M: 59,
                    percent: 40,
                  },
                  {
                    position: 4,
                    tag: "TP-1220",
                    description: "Tapadora de vasos",
                    tpef12M: 424.85,
                    fall12M: 20,
                    tpef24M: 532.69,
                    fall24M: 32,
                    percent: 20,
                  },
                  {
                    position: 5,
                    tag: "Z-1360",
                    description: "Envolvedor de cajas (Guillotina)",
                    tpef12M: 510.61,
                    fall12M: 17,
                    tpef24M: 862.41,
                    fall24M: 20,
                    percent: 20,
                  },
                ]}
                height={360}
                heightHeaderCell={80}
                columns={[
                  {
                    headerCell: "Pos",
                    dataKey: "position",
                    alingColumn: "center",
                    minWidthColumn: 50
                  },
                  {
                    headerCell: "TAG",
                    dataKey: "tag",
                    flexGrowColumn: 1,
                    alingColumn: "left",
                    minWidthColumn: 120
                  },
                  {
                    headerCell: "Descripcion",
                    dataKey: "description",
                    flexGrowColumn: 2,
                    alingColumn: "left",
                    minWidthColumn: 300
                  },
                ]}
                columnGroups={[
                  {
                    headers: "12 Meses",
                    alingHeader: "center",
                    columns: [
                      {
                        headerCell: "TPEF 12 M",
                        dataKey: "tpef12M",
                        flexGrowColumn: 1,
                        minWidthColumn: 100,
                        alingColumn: "center"
                      },
                      {
                        headerCell: "# Fallas",
                        dataKey: "fall12M",
                        flexGrowColumn: 1,
                        minWidthColumn: 100,
                        alingColumn: "center"
                      },
                    ]
                  },
                  {
                    headers: "24 Meses",
                    alingHeader: "center",
                    columns: [
                      {
                        headerCell: "TPEF 24 M",
                        dataKey: "tpef24M",
                        flexGrowColumn: 1,
                        minWidthColumn: 100,
                        alingColumn: "center"
                      },
                      {
                        headerCell: "# Fallas",
                        dataKey: "fall24M",
                        flexGrowColumn: 1,
                        minWidthColumn: 100,
                        alingColumn: "center"
                      },
                    ]
                  }
                ]}
                extraColumns={[
                  {
                    headerCell: "%",
                    dataKey: "percent",
                    alingColumn: "center",
                    minWidthColumn: 50
                  }
                ]}
                />
              </Col>
              <Col xs={24} lg={12}>
                <AppPlot
                  layout={{
                    title: "TPEF",
                    width:
                      (refContainerMedGraph.current?.clientWidth ||
                        screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                  }}
                  data={[
                    {
                      x: [9, 4, 9],
                      y: [1, 2, 3],
                      marker: { color: colors[0] },
                      type: "bar",
                      orientation: "h",
                    },
                    {
                      x: [8, 3, 8],
                      y: [1, 2, 3],
                      marker: { color: colors[1] },
                      type: "bar",
                      orientation: "h",
                    },
                  ]}
                />
              </Col>
            </Grid>
          </AppPanel>
        </Row>
      </AppPanelContainer>
      <br />
      <h4 id={props.subtitles[2].id}>{props.subtitles[2].label}</h4>
      <Divider />
      <AppPanelContainer>
        <Col xs={24}>
          <AppPanel>
            <strong>Equipos con mas tiempo fuera de servicio</strong>
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
            height={360}
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
                alingColumn: "center",
                minWidthColumn: 120,
              }
            ]}
            />
          </AppPanel>
        </Col>
      </AppPanelContainer>
      <br />
      <h4 id={props.subtitles[3].id}>{props.subtitles[3].label}</h4>
      <Divider />
      <AppPanelContainer>
        <Col xs={24}>
          <AppPanel>
            <Grid fluid={true}>
              <Col xs={24} lg={12}>
                <AppPlot
                  layout={{
                    title: "Ocurrencia de falla",
                    width:
                      (refContainerMedGraph.current?.clientWidth ||
                        screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                  }}
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [9, 4, 9],
                      marker: { color: colors[0] },
                      type: "bar",
                    },
                  ]}
                />
              </Col>
              <Col xs={24} lg={12}>
                <strong>Equipos en el segmento PF</strong>
                <AppTable
                dataTable={[
                  {
                    position: 1,
                    notice: 10012812,
                    tag: "GM-9601",
                    description: "Motor de generador G9601",
                    startDate: "26/11/2020",
                    days: 335,
                    order: 10030648,
                    statusODM: "PROG",
                  },
                  {
                    position: 2,
                    notice: 10012807,
                    tag: "NV-3250",
                    description: "Valvula de inyeccion de vapor hiladora",
                    startDate: "25/11/2020",
                    days: 336,
                    order: 10030552,
                    statusODM: "ESPR",
                  },
                  {
                    position: 3,
                    notice: 10012482,
                    tag: "NV-97045",
                    description: "Valvula de suministro L1 a ESF-205",
                    startDate: "23/10/2020",
                    days: 369,
                    order: 10030542,
                    statusODM: "PROG",
                  },
                  {
                    position: 4,
                    notice: 10012482,
                    tag: "GM-9600",
                    description: "Motor de generador G9600",
                    startDate: "28/11/2020",
                    days: 394,
                    order: 10029872,
                    statusODM: "PROG",
                  },
                  {
                    position: 5,
                    notice: 10012069,
                    tag: "FD-11508",
                    description: "Fundidora de queso 500lb (Cosina)",
                    startDate: "09/09/2020",
                    days: 413,
                    order: 10029509,
                    statusODM: "EMAT",
                  },
                ]}
                height={320}
                columns={[
                  {
                    headerCell: "Pos",
                    dataKey: "position",
                    minWidthColumn: 50,
                    alingColumn: "center",
                  },
                  {
                    headerCell: "Aviso",
                    dataKey: "notice",
                    flexGrowColumn: 1,
                    minWidthColumn: 120,
                    alingColumn: "center",
                  },
                  {
                    headerCell: "TAG",
                    dataKey: "tag",
                    flexGrowColumn: 1,
                    minWidthColumn: 120,
                    alingColumn: "left",
                  },
                  {
                    headerCell: "Descripcion TAG",
                    dataKey: "description",
                    flexGrowColumn: 2,
                    minWidthColumn: 300,
                    alingColumn: "left",
                  },
                  {
                    headerCell: "Fecha Inicio",
                    dataKey: "startDate",
                    flexGrowColumn: 1,
                    minWidthColumn: 120,
                    alingColumn: "center",
                  },
                  {
                    headerCell: "Dias",
                    dataKey: "days",
                    flexGrowColumn: 1,
                    minWidthColumn: 100,
                    alingColumn: "center",
                  },
                  {
                    headerCell: "Orden",
                    dataKey: "order",
                    flexGrowColumn: 1,
                    minWidthColumn: 120,
                    alingColumn: "center",
                  },
                  {
                    headerCell: "Status ODM",
                    dataKey: "statusODM",
                    flexGrowColumn: 1,
                    minWidthColumn: 100,
                    alingColumn: "center",
                  },
                ]}
                />
              </Col>
            </Grid>
          </AppPanel>
        </Col>
      </AppPanelContainer>
      <br />
      <h4 id={props.subtitles[4].id}>{props.subtitles[4].label}</h4>
      <Divider />
      <AppPanelContainer>
        <Col xs={24}>
          <AppPanel>
            <strong>Reparaciones temporales (RTEM)</strong>
            <AppTable
            dataTable={[
              {
                position: 1,
                notice: 10014450,
                order: 10033120,
                tagNotice: "HG4100A",
                description: "Homogeneizador A de productos",
                textOrder: "Reemplazar estoperas en Homog UHT",
                startDate: "22/07/2021",
                status: "EMAT",
                tagODM: "HG4100A",
              },
              {
                position: 2,
                notice: 10014401,
                order: 10033061,
                tagNotice: "ZM2442A",
                description: "Motor A de recolector y elevador Z2442",
                textOrder: "Reemplazar Contactor recolector",
                startDate: "14/07/2021",
                status: "PROG",
                tagODM: "Z2442",
              },
              {
                position: 3,
                notice: 10014150,
                order: 10032812,
                tagNotice: "DALPAST",
                description: "Pasteurizacion",
                textOrder: "Remplazar seleccionador y porta",
                startDate: "15/06/2021",
                status: "PROG",
                tagODM: "DALPAST",
              },
              {
                position: 4,
                notice: 10013712,
                order: 10032162,
                tagNotice: "PM1131",
                description: "Motor boma transf. tolva a pulmon P1131",
                textOrder: "Peemplazar LIQUID TIGHT",
                startDate: "06/04/2021",
                status: "ESPR",
                tagODM: "PM1131",
              },
              {
                position: 5,
                notice: 10030636,
                order: 100313376,
                tagNotice: null,
                description: "**Aviso con mas de 2 años / error texto ODM",
                textOrder: "Reemplazar bloque auxiliar y c",
                startDate: "29/01/2021",
                status: "EMAT",
                tagODM: "CYM1201",
              },
            ]}
            height={320}
            columns={[
              {
                headerCell: "Pos",
                dataKey: "position",
                minWidthColumn: 50,
                alingColumn: "center",
              },
              {
                headerCell: "Avisos",
                dataKey: "notice",
                flexGrowColumn: 1,
                minWidthColumn: 120,
                alingColumn: "center",
              },
              {
                headerCell: "Orden",
                dataKey: "order",
                flexGrowColumn: 1,
                minWidthColumn: 120,
                alingColumn: "center",
              },
              {
                headerCell: "TAG Aviso",
                dataKey: "tagNotice",
                flexGrowColumn: 1,
                minWidthColumn: 120,
                alingColumn: "left",
              },
              {
                headerCell: "Descripcion TAG",
                dataKey: "description",
                flexGrowColumn: 2,
                minWidthColumn: 300,
                alingColumn: "left",
              },
              {
                headerCell: "Texto orden",
                dataKey: "textOrder",
                flexGrowColumn: 2,
                minWidthColumn: 300,
                alingColumn: "left",
              },
              {
                headerCell: "F. Inicio",
                dataKey: "startDate",
                flexGrowColumn: 1,
                minWidthColumn: 120,
                alingColumn: "center",
              },
              {
                headerCell: "Status",
                dataKey: "status",
                flexGrowColumn: 1,
                minWidthColumn: 100,
                alingColumn: "center",
              },
              {
                headerCell: "TAG ODM",
                dataKey: "tagODM",
                flexGrowColumn: 1,
                minWidthColumn: 120,
                alingColumn: "center",
              },
            ]}
            />
          </AppPanel>
        </Col>
      </AppPanelContainer>
      <br />
      <h4 id={props.subtitles[5].id}>{props.subtitles[5].label}</h4>
      <Divider />
      <br />
      <h4 id={props.subtitles[6].id}>{props.subtitles[6].label}</h4>
      <Divider />
    </AppSimplePageTemplate>
  )
}

export default AlertAndFailurePageView
