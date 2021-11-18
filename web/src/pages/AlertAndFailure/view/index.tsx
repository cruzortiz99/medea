import React, { ReactNode, useRef } from "react"
import { useLocation } from "react-router-dom"
import { Col, Divider, Grid, Panel, Row } from "rsuite"
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
        <Col xs={24} md={16}>
          <Row>
            <div ref={refContainerBigGraph}>
              <AppPanel>
                <AppPlot
                  layout={{
                    title: "Avisos Emitidos vs Concluidos",
                    width:
                      (refContainerBigGraph.current?.clientWidth ||
                        screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                    barmode: "group",
                  }}
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [9, 4, 9],
                      marker: { color: randomColor() },
                      type: "bar",
                    },
                    {
                      x: [1, 2, 3],
                      y: [8, 3, 8],
                      marker: { color: randomColor() },
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
                  barmode: "group",
                }}
                data={[
                  {
                    x: [1, 2, 3],
                    y: [9, 4, 9],
                    marker: { color: randomColor() },
                    type: "bar",
                  },
                  {
                    x: [1, 2, 3],
                    y: [8, 3, 8],
                    marker: { color: randomColor() },
                    type: "bar",
                  },
                ]}
              />
            </AppPanel>
          </Row>
        </Col>
        <Col xs={24} md={8} className={styles.padding0}>
          <Col xs={24} sm={12} md={24} className={joinClasses(styles.padding0)}>
            <AppPanel>Table</AppPanel>
          </Col>
          <Col xs={24} sm={12} md={24} className={joinClasses(styles.padding0)}>
            <AppPanel>Table</AppPanel>
          </Col>
        </Col>
      </AppPanelContainer>
      <br />
      <h4 id={props.subtitles[1].id}>{props.subtitles[1].label}</h4>
      <Divider />
      <AppPanelContainer>
        <Row>
          <Col xs={24} md={12}>
            <Row>
              <div ref={refContainerMedGraph}>
                <AppPanel>
                  <AppPlot
                    layout={{
                      title: "Cantidad de fallas de equipos",
                      width:
                        (refContainerMedGraph.current?.clientWidth ||
                          screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                      barmode: "group",
                    }}
                    data={[
                      {
                        x: [1, 2, 3],
                        y: [9, 4, 9],
                        marker: { color: randomColor() },
                        type: "bar",
                      },
                      {
                        x: [1, 2, 3],
                        y: [8, 3, 8],
                        marker: { color: randomColor() },
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
                    barmode: "group",
                  }}
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [9, 4, 9],
                      marker: { color: randomColor() },
                      type: "bar",
                    },
                    {
                      x: [1, 2, 3],
                      y: [8, 3, 8],
                      marker: { color: randomColor() },
                      type: "bar",
                    },
                  ]}
                />
              </AppPanel>
            </Row>
          </Col>
          <Col xs={24} md={12}>
            <Row>
              <AppPanel>
                <AppPlot
                  layout={{
                    title:
                      "Cantidad de fallas de equipos con <br>paro o limitación de producción",
                    width:
                      (refContainerMedGraph.current?.clientWidth ||
                        screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                    barmode: "group",
                  }}
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [9, 4, 9],
                      marker: { color: randomColor() },
                      type: "bar",
                    },
                    {
                      x: [1, 2, 3],
                      y: [8, 3, 8],
                      marker: { color: randomColor() },
                      type: "bar",
                    },
                    {
                      x: [1, 2, 3],
                      y: [17, 7, 17],
                      marker: { color: randomColor() },
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
                    barmode: "group",
                  }}
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [9, 4, 9],
                      marker: { color: randomColor() },
                      type: "bar",
                    },
                    {
                      x: [1, 2, 3],
                      y: [8, 3, 8],
                      marker: { color: randomColor() },
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
              <Col xs={24} md={12}>
                Table
              </Col>
              <Col xs={24} md={12}>
                Table
              </Col>
            </Grid>
          </AppPanel>
        </Row>
        <Row>
          <AppPanel>
            <Grid className={styles.fullWidth} fluid>
              <Col xs={24} md={12}>
                Table
              </Col>
              <Col xs={24} md={12}>
                Table
              </Col>
            </Grid>
          </AppPanel>
        </Row>
        <Row>
          <AppPanel>
            <Grid className={styles.fullWidth} fluid>
              <Col xs={24} md={12}>
                Table
              </Col>
              <Col xs={24} md={12}>
                <AppPlot
                  layout={{
                    title: "TPEF",
                    width:
                      (refContainerMedGraph.current?.clientWidth ||
                        screen.width * 0.5) * (screen.xs ? 0.6 : 0.8),
                    barmode: "group",
                  }}
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [9, 4, 9],
                      marker: { color: randomColor() },
                      type: "bar",
                    },
                    {
                      x: [1, 2, 3],
                      y: [8, 3, 8],
                      marker: { color: randomColor() },
                      type: "bar",
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
          <AppPanel>Table</AppPanel>
        </Col>
      </AppPanelContainer>
      <br />
      <h4 id={props.subtitles[3].id}>{props.subtitles[3].label}</h4>
      <Divider />
      <AppPanelContainer>
        <Col xs={24}>
          <AppPanel>
            <Grid fluid={true}>
              <Col xs={24} md={12}>
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
                      marker: { color: randomColor() },
                      type: "bar",
                    },
                  ]}
                />
              </Col>
              <Col xs={24} md={12}>
                Table
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
          <AppPanel>Table</AppPanel>
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
