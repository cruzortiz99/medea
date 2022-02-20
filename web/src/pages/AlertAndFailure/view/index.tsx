import React, { ReactNode, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { Col, Divider, Grid, Row } from "rsuite"
import AppPlot from "../../../components/atoms/AppPlot"
import AppPanel from "../../../components/atoms/Panel"
import AppPanelContainer from "../../../components/atoms/PanelContainer"
import AppSimplePageTemplate from "../../../components/templates/AppSimplePageTemplate"
import AppTable from "../../../components/atoms/AppTable"
import { PAGE_URL } from "../../../constants"
import { joinClasses } from "../../../utils/css"
import { useScreenDimension } from "../../../utils/screen/hooks"
import styles from "./AlertAndFailurePage.module.css"
import { PlotData } from "plotly.js"
import {
  APINoteM2,
  APINoteM3,
  APITotalFall,
  APITotalFailures,
  APIEquipmentDownTimeFall,
  APITeamsImpactProduction,
  APITpef,
  APIEquipmentTimeOut,
  APIEquipmentPF,
  APITemporaryRepairs,
} from "../../../models"
export type AlertAndFailurePageViewProps = {
  plantName: ReactNode
  monthAndYear: ReactNode
  equipment: ReactNode
  process: ReactNode
  dataTableNoteM2: APINoteM2[]
  dataTableNoteM3: APINoteM3[]
  dataTableTotalFall: APITotalFall[]
  dataTableTotalFailures: APITotalFailures[]
  dataTableEquipmentDownTimeFall: APIEquipmentDownTimeFall[]
  dataTableTeamsImpactProduction: APITeamsImpactProduction[]
  dataTableTpef: APITpef[]
  dataTableEquipmentTimeOut: APIEquipmentTimeOut[]
  dataTableEquipmentPF: APIEquipmentPF[]
  dataTableTemporaryRepairs: APITemporaryRepairs[]
  dataGraphNoteAlert: Partial<PlotData>[]
  dataGraphNoticeOrders: Partial<PlotData>[]
  dataGraphEquipmentFailures: Partial<PlotData>[]
  dataGraphDownTimeHours: Partial<PlotData>[]
  dataGraphProductionLimitation: Partial<PlotData>[]
  dataGraphDownTimeImpactProduction: Partial<PlotData>[]
  dataGraphTpef: Partial<PlotData>[]
  dataGraphFaultOccurrence: Partial<PlotData>[]
  isLoader?: boolean
  subtitles: { label: ReactNode; id: string }[]
}

function AlertAndFailurePageView(
  props: AlertAndFailurePageViewProps
): JSX.Element {
  const hashName = useLocation().hash
  const refContainerBigGraph = useRef<HTMLDivElement | null>(null)
  const refContainerMedGraph = useRef<HTMLDivElement | null>(null)
  const screen = useScreenDimension()

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
      mainTitle={<h3>{props.plantName}</h3>}
      subtitle={
        <div className={styles.subtitle}>
          <p>{props.monthAndYear}</p>
          <p>{props.equipment}</p>
          <p>{props.process}</p>
        </div>
      }
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
                  data={props.dataGraphNoteAlert}
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
                data={props.dataGraphNoticeOrders}
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
                dataTable={props.dataTableNoteM2}
                columns={[
                  {
                    headerCell: "Ejecutor",
                    dataKey: "executor",
                    flexGrowColumn: 1,
                    alingColumn: "left",
                    minWidthColumn: 100,
                  },
                  {
                    headerCell: "cantidad",
                    dataKey: "amount",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 50,
                  },
                  {
                    headerCell: "Horas",
                    dataKey: "hours",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 50,
                  },
                  {
                    headerCell: "Sin FF",
                    dataKey: "with_out_ff",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 50,
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
                dataTable={props.dataTableNoteM3}
                columns={[
                  {
                    headerCell: "Ejecutor",
                    dataKey: "excecutor",
                    flexGrowColumn: 1,
                    alingColumn: "left",
                    minWidthColumn: 100,
                  },
                  {
                    headerCell: "cantidad",
                    dataKey: "amount",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 50,
                  },
                  {
                    headerCell: "Horas",
                    dataKey: "hours",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 50,
                  },
                  {
                    headerCell: "Sin FF",
                    dataKey: "with_out_ff",
                    flexGrowColumn: 1,
                    alingColumn: "center",
                    minWidthColumn: 50,
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
                    data={props.dataGraphEquipmentFailures}
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
                  data={props.dataGraphDownTimeHours}
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
                  data={props.dataGraphProductionLimitation}
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
                  data={props.dataGraphDownTimeImpactProduction}
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
                  dataTable={props.dataTableTotalFall}
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
                <strong>
                  Total fallas con paro o limitacion de la produccion
                </strong>
                <AppTable
                  dataTable={props.dataTableTotalFailures}
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
                      headerCell: "#R3",
                      dataKey: "r3",
                      flexGrowColumn: 1,
                      alingColumn: "center",
                      minWidthColumn: 100,
                    },
                    {
                      headerCell: "#R2",
                      dataKey: "r2",
                      flexGrowColumn: 1,
                      alingColumn: "center",
                      minWidthColumn: 100,
                    },
                    {
                      headerCell: "Cant.",
                      dataKey: "amount",
                      flexGrowColumn: 1,
                      alingColumn: "center",
                      minWidthColumn: 100,
                    },
                    {
                      headerCell: "DT Hrs",
                      dataKey: "dtHours",
                      flexGrowColumn: 1,
                      alingColumn: "center",
                      minWidthColumn: 120,
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
                  dataTable={props.dataTableEquipmentDownTimeFall}
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
                <strong>
                  Equipos con mayor down time e impacto en la produccion
                </strong>
                <AppTable
                  dataTable={props.dataTableTeamsImpactProduction}
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
                      headerCell: "#R3",
                      dataKey: "r3",
                      flexGrowColumn: 1,
                      alingColumn: "center",
                      minWidthColumn: 100,
                    },
                    {
                      headerCell: "#R2",
                      dataKey: "r2",
                      flexGrowColumn: 1,
                      alingColumn: "center",
                      minWidthColumn: 100,
                    },
                    {
                      headerCell: "Cant.",
                      dataKey: "amount",
                      flexGrowColumn: 1,
                      alingColumn: "center",
                      minWidthColumn: 100,
                    },
                    {
                      headerCell: "DT Hrs",
                      dataKey: "dtHours",
                      flexGrowColumn: 1,
                      alingColumn: "center",
                      minWidthColumn: 120,
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
                  dataTable={props.dataTableTpef}
                  height={360}
                  heightHeaderCell={80}
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
                          alingColumn: "center",
                        },
                        {
                          headerCell: "# Fallas",
                          dataKey: "fall12M",
                          flexGrowColumn: 1,
                          minWidthColumn: 100,
                          alingColumn: "center",
                        },
                      ],
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
                          alingColumn: "center",
                        },
                        {
                          headerCell: "# Fallas",
                          dataKey: "fall24M",
                          flexGrowColumn: 1,
                          minWidthColumn: 100,
                          alingColumn: "center",
                        },
                      ],
                    },
                  ]}
                  extraColumns={[
                    {
                      headerCell: "%",
                      dataKey: "percent",
                      alingColumn: "center",
                      minWidthColumn: 50,
                    },
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
                  data={props.dataGraphTpef}
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
              dataTable={props.dataTableEquipmentTimeOut}
              height={360}
              heightHeaderCell={80}
              columns={[
                {
                  headerCell: "Pos",
                  dataKey: "position",
                  minWidthColumn: 50,
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
                  headerCell: "Descripcion",
                  dataKey: "description",
                  flexGrowColumn: 2,
                  minWidthColumn: 300,
                  alingColumn: "left",
                },
                {
                  headerCell: "Avisos",
                  dataKey: "notices",
                  flexGrowColumn: 1,
                  minWidthColumn: 120,
                  alingColumn: "center",
                },
                {
                  headerCell: "Dias DS",
                  dataKey: "daysDS",
                  flexGrowColumn: 1,
                  minWidthColumn: 100,
                  alingColumn: "center",
                },
                {
                  headerCell: "Reper",
                  dataKey: "reper",
                  flexGrowColumn: 1,
                  minWidthColumn: 50,
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
                  headerCell: "CTEC",
                  dataKey: "ctec",
                  flexGrowColumn: 1,
                  minWidthColumn: 50,
                  alingColumn: "center",
                },
                {
                  headerCell: "NOTI",
                  dataKey: "noti",
                  flexGrowColumn: 1,
                  minWidthColumn: 50,
                  alingColumn: "center",
                },
                {
                  headerCell: "EJEC",
                  dataKey: "ejec",
                  flexGrowColumn: 1,
                  minWidthColumn: 50,
                  alingColumn: "center",
                },
                {
                  headerCell: "EMAT",
                  dataKey: "emat",
                  flexGrowColumn: 1,
                  minWidthColumn: 50,
                  alingColumn: "center",
                },
                {
                  headerCell: "ESPS",
                  dataKey: "esps",
                  flexGrowColumn: 1,
                  minWidthColumn: 50,
                  alingColumn: "center",
                },
                {
                  headerCell: "PROG",
                  dataKey: "prog",
                  flexGrowColumn: 1,
                  minWidthColumn: 50,
                  alingColumn: "center",
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
                      alingColumn: "center",
                    },
                    {
                      headerCell: "H. Inic",
                      dataKey: "startTime",
                      flexGrowColumn: 1,
                      minWidthColumn: 100,
                      alingColumn: "center",
                    },
                    {
                      headerCell: "Fecha Fin",
                      dataKey: "endDate",
                      flexGrowColumn: 1,
                      minWidthColumn: 120,
                      alingColumn: "center",
                    },
                    {
                      headerCell: "Hora Fin",
                      dataKey: "endTime",
                      flexGrowColumn: 1,
                      minWidthColumn: 100,
                      alingColumn: "center",
                    },
                  ],
                },
              ]}
              extraColumns={[
                {
                  headerCell: "Inicio falla",
                  dataKey: "startFails",
                  alingColumn: "center",
                  minWidthColumn: 120,
                },
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
                  data={props.dataGraphFaultOccurrence}
                />
              </Col>
              <Col xs={24} lg={12}>
                <strong>Equipos en el segmento PF</strong>
                <AppTable
                  dataTable={props.dataTableEquipmentPF}
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
              dataTable={props.dataTableTemporaryRepairs}
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
