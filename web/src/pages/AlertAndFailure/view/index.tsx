import React, { ReactNode, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Breadcrumb, Container, Content, Header } from "rsuite"
import { PAGE_URL } from "../../../constants"
import { joinClasses } from "../../../utils/css-classes"
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
  const breadCrumbLinks: { label: ReactNode; href: string }[] = [
    {
      label: "Activos y Fallas",
      href: PAGE_URL.ALERTS_FAILURES,
    },
  ]
  return (
    <Container>
      <Header className={joinClasses(styles.header)}>
        <h3>{props.plantName}</h3>
        <p>{props.monthAndYear}</p>
        <br />
        <Breadcrumb>
          {props.subtitles
            .filter((subtitle) => hashName.match(subtitle.id))
            .map((subtitle) => ({
              label: subtitle.label,
              href: subtitle.id,
            }))
            .reduce<{ label: ReactNode; href: string }[]>(
              (acc, current) => (acc.length > 1 ? acc : [...acc, current]),
              breadCrumbLinks
            )

            .map((link, key) => (
              <Breadcrumb.Item
                key={key}
                as={Link}
                to={link.href}
                active={!!hashName.match(link.href)}
              >
                {link.label}
              </Breadcrumb.Item>
            ))}
        </Breadcrumb>
      </Header>
      <Content className={joinClasses(styles.content)}>
        <Container style={{ minHeight: "200vh" }}>
          <h4 id={props.subtitles[0].id}>{props.subtitles[0].label}</h4>
          <h4 id={props.subtitles[1].id}>{props.subtitles[1].label}</h4>
          <h4 id={props.subtitles[2].id}>{props.subtitles[2].label}</h4>
          <h4 id={props.subtitles[3].id}>{props.subtitles[3].label}</h4>
          <h4 id={props.subtitles[4].id}>{props.subtitles[4].label}</h4>
          <h4 id={props.subtitles[5].id}>{props.subtitles[5].label}</h4>
          <h4 id={props.subtitles[6].id}>{props.subtitles[6].label}</h4>
        </Container>
      </Content>
    </Container>
  )
}

export default AlertAndFailurePageView
