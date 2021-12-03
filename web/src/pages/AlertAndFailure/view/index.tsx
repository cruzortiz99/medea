import React, { ReactNode, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { Col, Divider, Grid, Row, Table } from "rsuite"
import AppPlot from "../../../components/atoms/AppPlot"
import AppPanel from "../../../components/atoms/Panel"
import AppPanelContainer from "../../../components/atoms/PanelContainer"
import AppSimplePageTemplate from "../../../components/templates/AppSimplePageTemplate"
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
              <Table
                height={260}
                wordWrap
                data={[
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
              >
                <Table.Column flexGrow={1} minWidth={120}>
                  <Table.HeaderCell>Ejecutor</Table.HeaderCell>
                  <Table.Cell dataKey="executor" />
                </Table.Column>
                <Table.Column width={80} align="center">
                  <Table.HeaderCell>Cantidad</Table.HeaderCell>
                  <Table.Cell dataKey="amount" />
                </Table.Column>
                <Table.Column width={80} align="center">
                  <Table.HeaderCell>Horas</Table.HeaderCell>
                  <Table.Cell dataKey="hours" />
                </Table.Column>
                <Table.Column width={80} align="center">
                  <Table.HeaderCell>Sin FF</Table.HeaderCell>
                  <Table.Cell dataKey="sinFF" />
                </Table.Column>
              </Table>
            </Col>
            <Col
              xs={24}
              md={11}
              lg={24}
              className={joinClasses(styles.padding0, styles.margin10)}
            >
              <strong>Avisos M3</strong>
              <Table
                height={260}
                wordWrap
                data={[
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
              >
                <Table.Column flexGrow={1} minWidth={120}>
                  <Table.HeaderCell>Ejecutor</Table.HeaderCell>
                  <Table.Cell dataKey="executor" />
                </Table.Column>
                <Table.Column width={80} align="center">
                  <Table.HeaderCell>Cantidad</Table.HeaderCell>
                  <Table.Cell dataKey="amount" />
                </Table.Column>
                <Table.Column width={80} align="center">
                  <Table.HeaderCell>Horas</Table.HeaderCell>
                  <Table.Cell dataKey="hours" />
                </Table.Column>
                <Table.Column width={80} align="center">
                  <Table.HeaderCell>Sin FF</Table.HeaderCell>
                  <Table.Cell dataKey="sinFF" />
                </Table.Column>
              </Table>
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
                <Table 
                height={320}
                wordWrap 
                data={[
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
                ]}>
                  <Table.Column align="center" width={50}>
                    <Table.HeaderCell>Pos</Table.HeaderCell>
                    <Table.Cell dataKey="position"/>
                  </Table.Column>
                  <Table.Column align="center" width={120}>
                    <Table.HeaderCell>TAG</Table.HeaderCell>
                    <Table.Cell dataKey="tag"/>
                  </Table.Column>
                  <Table.Column flexGrow={1} minWidth={300}>
                    <Table.HeaderCell>Descripcion</Table.HeaderCell>
                    <Table.Cell dataKey="description"/>
                  </Table.Column>
                  <Table.Column align="center" width={60}>
                    <Table.HeaderCell>Cant.</Table.HeaderCell>
                    <Table.Cell dataKey="amount"/>
                  </Table.Column>
                  <Table.Column width={120} align="center">
                    <Table.HeaderCell>Down time Hrs</Table.HeaderCell>
                    <Table.Cell dataKey="downTime"/>
                  </Table.Column>
                  <Table.Column align="center" width={60}>
                    <Table.HeaderCell>ACDT</Table.HeaderCell>
                    <Table.Cell dataKey="acdt"/>
                  </Table.Column>
                </Table>
              </Col>
              <Col xs={24} lg={12}>
                <strong>Total fallas con paro o limitacion de la produccion</strong>
                <Table
                 height={320}
                 wordWrap 
                 data={[
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
                 ]}>
                  <Table.Column align="center" width={50}>
                    <Table.HeaderCell>Pos</Table.HeaderCell>
                    <Table.Cell dataKey="position"/>
                  </Table.Column>
                  <Table.Column align="center" width={120}>
                    <Table.HeaderCell>TAG</Table.HeaderCell>
                    <Table.Cell dataKey="tag"/>
                  </Table.Column>
                  <Table.Column flexGrow={1} minWidth={300}>
                    <Table.HeaderCell>Descripcion</Table.HeaderCell>
                    <Table.Cell dataKey="description"/>
                  </Table.Column>
                  <Table.Column align="center" width={60}>
                    <Table.HeaderCell>#R3</Table.HeaderCell>
                    <Table.Cell dataKey="r3"/>
                  </Table.Column>
                  <Table.Column align="center" width={60}>
                    <Table.HeaderCell>#R2</Table.HeaderCell>
                    <Table.Cell dataKey="r2"/>
                  </Table.Column>
                  <Table.Column align="center" width={60}>
                    <Table.HeaderCell>Cant.</Table.HeaderCell>
                    <Table.Cell dataKey="amount"/>
                  </Table.Column>
                  <Table.Column width={60} align="center">
                    <Table.HeaderCell>DT Hrs</Table.HeaderCell>
                    <Table.Cell dataKey="dtHours"/>
                  </Table.Column>
                </Table>
              </Col>
            </Grid>
          </AppPanel>
        </Row>
        <Row>
          <AppPanel>
            <Grid className={styles.fullWidth} fluid>
              <Col xs={24} lg={12}>
                <strong>Equipos con mayor down time por fallas</strong>
                <Table 
                height={320}
                wordWrap 
                data={[
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
                ]}>
                  <Table.Column align="center" width={50}>
                    <Table.HeaderCell>Pos</Table.HeaderCell>
                    <Table.Cell dataKey="position"/>
                  </Table.Column>
                  <Table.Column align="center" width={120}>
                    <Table.HeaderCell>TAG</Table.HeaderCell>
                    <Table.Cell dataKey="tag"/>
                  </Table.Column>
                  <Table.Column flexGrow={1} minWidth={300}>
                    <Table.HeaderCell>Descripcion</Table.HeaderCell>
                    <Table.Cell dataKey="description"/>
                  </Table.Column>
                  <Table.Column align="center" width={60}>
                    <Table.HeaderCell>Cant.</Table.HeaderCell>
                    <Table.Cell dataKey="amount"/>
                  </Table.Column>
                  <Table.Column width={120} align="center">
                    <Table.HeaderCell>Down time Hrs</Table.HeaderCell>
                    <Table.Cell dataKey="downTime"/>
                  </Table.Column>
                  <Table.Column align="center" width={60}>
                    <Table.HeaderCell>ACDT</Table.HeaderCell>
                    <Table.Cell dataKey="acdt"/>
                  </Table.Column>
                </Table>
              </Col>
              <Col xs={24} lg={12}>
                <strong>Equipos con mayor down time e impacto en la produccion</strong>
                <Table 
                height={320}
                wordWrap
                data={[
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
                ]} >
                  <Table.Column align="center" width={50}>
                    <Table.HeaderCell>Pos</Table.HeaderCell>
                    <Table.Cell dataKey="position"/>
                  </Table.Column>
                  <Table.Column align="center" width={120}>
                    <Table.HeaderCell>TAG</Table.HeaderCell>
                    <Table.Cell dataKey="tag"/>
                  </Table.Column>
                  <Table.Column flexGrow={1} minWidth={300}>
                    <Table.HeaderCell>Descripcion</Table.HeaderCell>
                    <Table.Cell dataKey="description"/>
                  </Table.Column>
                  <Table.Column align="center" width={60}>
                    <Table.HeaderCell>#R3</Table.HeaderCell>
                    <Table.Cell dataKey="r3"/>
                  </Table.Column>
                  <Table.Column align="center" width={60}>
                    <Table.HeaderCell>#R2</Table.HeaderCell>
                    <Table.Cell dataKey="r2"/>
                  </Table.Column>
                  <Table.Column width={60} align="center">
                    <Table.HeaderCell>DT Hrs</Table.HeaderCell>
                    <Table.Cell dataKey="dtHours"/>
                  </Table.Column>
                  <Table.Column align="center" width={60}>
                    <Table.HeaderCell>Cant.</Table.HeaderCell>
                    <Table.Cell dataKey="amount"/>
                  </Table.Column>
                </Table>
              </Col>
            </Grid>
          </AppPanel>
        </Row>
        <Row>
          <AppPanel>
            <Grid className={styles.fullWidth} fluid>
              <Col xs={24} lg={12}>
                <strong>TPEF</strong>
                <Table 
                height={320} 
                headerHeight={80}
                wordWrap
                data={[
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
                ]} >
                  <Table.Column align="center" width={50}>
                    <Table.HeaderCell>Pos</Table.HeaderCell>
                    <Table.Cell dataKey="position"/>
                  </Table.Column>
                  <Table.Column align="center" width={120}>
                    <Table.HeaderCell>TAG</Table.HeaderCell>
                    <Table.Cell dataKey="tag"/>
                  </Table.Column>
                  <Table.Column flexGrow={1} minWidth={300}>
                    <Table.HeaderCell>Descripcion</Table.HeaderCell>
                    <Table.Cell dataKey="description"/>
                  </Table.Column>
                  <Table.ColumnGroup header="12 Meses" align="center">
                    <Table.Column width={120} align="center">
                      <Table.HeaderCell>TPEF 12 M</Table.HeaderCell>
                      <Table.Cell dataKey="tpef12M"/>
                    </Table.Column>
                    <Table.Column width={120} align="center">
                      <Table.HeaderCell># Fallas</Table.HeaderCell>
                      <Table.Cell dataKey="fall12M"/>
                    </Table.Column>
                  </Table.ColumnGroup>
                  <Table.ColumnGroup header="24 Meses" align="center">
                    <Table.Column align="center" width={120}>
                      <Table.HeaderCell>TPEF 24 M</Table.HeaderCell>
                      <Table.Cell dataKey="tpef24M"/>
                    </Table.Column>
                    <Table.Column align="center" width={120}>
                      <Table.HeaderCell># Fallas</Table.HeaderCell>
                      <Table.Cell dataKey="fall24M"/>
                    </Table.Column>
                  </Table.ColumnGroup>
                  <Table.Column align="center" width={50}>
                    <Table.HeaderCell>%</Table.HeaderCell>
                    <Table.Cell dataKey="percent"/>
                  </Table.Column>
                </Table>
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
            <Table 
            height={320} 
            headerHeight={80}
            wordWrap
            data={[
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
            ]}>
              <Table.Column width={50} align="center">
                <Table.HeaderCell>Pos</Table.HeaderCell>
                <Table.Cell dataKey="position"/>
              </Table.Column>
              <Table.Column width={120} align="center">
                <Table.HeaderCell>TAG</Table.HeaderCell>
                <Table.Cell dataKey="tag"/>
              </Table.Column>
              <Table.Column flexGrow={1} minWidth={300}>
                <Table.HeaderCell>Descripcion</Table.HeaderCell>
                <Table.Cell dataKey="description"/>
              </Table.Column>
              <Table.Column width={120} align="center">
                <Table.HeaderCell>Avisos</Table.HeaderCell>
                <Table.Cell dataKey="notices"/>
              </Table.Column>
              <Table.Column width={80} align="center">
                <Table.HeaderCell>Dias DS</Table.HeaderCell>
                <Table.Cell dataKey="daysDS"/>
              </Table.Column>
              <Table.Column width={80} align="center">
                <Table.HeaderCell>Reper</Table.HeaderCell>
                <Table.Cell dataKey="reper"/>
              </Table.Column>
              <Table.Column width={120} align="center">
                <Table.HeaderCell>Orden</Table.HeaderCell>
                <Table.Cell dataKey="order"/>
              </Table.Column>
              <Table.Column width={80} align="center">
                <Table.HeaderCell>CTEC</Table.HeaderCell>
                <Table.Cell dataKey="ctec"/>
              </Table.Column>
              <Table.Column width={80} align="center">
                <Table.HeaderCell>NOTI</Table.HeaderCell>
                <Table.Cell dataKey="noti"/>
              </Table.Column>
              <Table.Column width={80} align="center">
                <Table.HeaderCell>EJEC</Table.HeaderCell>
                <Table.Cell dataKey="ejec"/>
              </Table.Column>
              <Table.Column width={80} align="center">
                <Table.HeaderCell>EMAT</Table.HeaderCell>
                <Table.Cell dataKey="emat"/>
              </Table.Column>
              <Table.Column width={80} align="center">
                <Table.HeaderCell>ESPS</Table.HeaderCell>
                <Table.Cell dataKey="esps"/>
              </Table.Column>
              <Table.Column width={80} align="center">
                <Table.HeaderCell>PROG</Table.HeaderCell>
                <Table.Cell dataKey="prog"/>
              </Table.Column>
              <Table.ColumnGroup header=" Datos de la notificacion" align="center">
                <Table.Column width={120} align="center">
                  <Table.HeaderCell>Fecha Inic</Table.HeaderCell>
                  <Table.Cell dataKey="startDate"/>
                </Table.Column>
                <Table.Column width={120} align="center">
                  <Table.HeaderCell>H. Inic</Table.HeaderCell>
                  <Table.Cell dataKey="startTime"/>
                </Table.Column>
                <Table.Column width={120} align="center">
                  <Table.HeaderCell>Fecha Fin</Table.HeaderCell>
                  <Table.Cell dataKey="endDate"/>
                </Table.Column>
                <Table.Column width={120} align="center">
                  <Table.HeaderCell>Hora Fin</Table.HeaderCell>
                  <Table.Cell dataKey="endTime"/>
                </Table.Column>
              </Table.ColumnGroup>
              <Table.Column width={120} align="center">
                <Table.HeaderCell>Inicio falla</Table.HeaderCell>
                <Table.Cell dataKey="startFails"/>
              </Table.Column>
            </Table>
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
                <Table 
                height={320}
                wordWrap
                data={[
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
                ]}>
                  <Table.Column width={50} align="center">
                    <Table.HeaderCell>Pos</Table.HeaderCell>
                    <Table.Cell dataKey="position"/>
                  </Table.Column>
                  <Table.Column width={140} align="center">
                    <Table.HeaderCell>Aviso</Table.HeaderCell>
                    <Table.Cell dataKey="notice"/>
                  </Table.Column>
                  <Table.Column width={120} align="center">
                    <Table.HeaderCell>TAG</Table.HeaderCell>
                    <Table.Cell dataKey="tag"/>
                  </Table.Column>
                  <Table.Column flexGrow={1} minWidth={300}>
                    <Table.HeaderCell>Descripcion TAG</Table.HeaderCell>
                    <Table.Cell dataKey="description"/>
                  </Table.Column>
                  <Table.Column width={120} align="center">
                    <Table.HeaderCell>Fecha Inicio</Table.HeaderCell>
                    <Table.Cell dataKey="startDate"/>
                  </Table.Column>
                  <Table.Column width={80} align="center">
                    <Table.HeaderCell>Dias</Table.HeaderCell>
                    <Table.Cell dataKey="days"/>
                  </Table.Column>
                  <Table.Column width={140} align="center">
                    <Table.HeaderCell>Orden</Table.HeaderCell>
                    <Table.Cell dataKey="order"/>
                  </Table.Column>
                  <Table.Column width={120} align="center">
                    <Table.HeaderCell>Status ODM</Table.HeaderCell>
                    <Table.Cell dataKey="statusODM"/>
                  </Table.Column>
                </Table>
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
            <Table 
            height={320}
            wordWrap
            data={[
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
            ]}>
              <Table.Column width={50} align="center">
                <Table.HeaderCell>Pos</Table.HeaderCell>
                <Table.Cell dataKey="position"/>
              </Table.Column>
              <Table.Column width={140} align="center">
                <Table.HeaderCell>Avisos</Table.HeaderCell>
                <Table.Cell dataKey="notice"/>
              </Table.Column>
              <Table.Column width={140} align="center">
                <Table.HeaderCell>Orden</Table.HeaderCell>
                <Table.Cell dataKey="order"/>
              </Table.Column>
              <Table.Column width={180} align="center">
                <Table.HeaderCell>TAG Aviso</Table.HeaderCell>
                <Table.Cell dataKey="tagNotice"/>
              </Table.Column>
              <Table.Column flexGrow={1} minWidth={300}>
                <Table.HeaderCell>Descripcion TAG</Table.HeaderCell>
                <Table.Cell dataKey="description"/>
              </Table.Column>
              <Table.Column flexGrow={1} minWidth={300}>
                <Table.HeaderCell>Texto orden</Table.HeaderCell>
                <Table.Cell dataKey="textOrder"/>
              </Table.Column>
              <Table.Column width={120} align="center">
                <Table.HeaderCell>F. Inicio</Table.HeaderCell>
                <Table.Cell dataKey="startDate"/>
              </Table.Column>
              <Table.Column width={120} align="center">
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.Cell dataKey="status"/>
              </Table.Column>
              <Table.Column width={120} align="center">
                <Table.HeaderCell>TAG ODM</Table.HeaderCell>
                <Table.Cell dataKey="tagODM"/>
              </Table.Column>
            </Table>
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
