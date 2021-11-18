import React, { ReactNode, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Breadcrumb, Container, Content, Header } from "rsuite"
import AppSimplePageTemplate from "../../../components/templates/AppSimplePageTemplate"
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
          label: "Activos y Fallas",
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
      <h4 id={props.subtitles[1].id}>{props.subtitles[1].label}</h4>
      <h4 id={props.subtitles[2].id}>{props.subtitles[2].label}</h4>
      <h4 id={props.subtitles[3].id}>{props.subtitles[3].label}</h4>
      <h4 id={props.subtitles[4].id}>{props.subtitles[4].label}</h4>
      <h4 id={props.subtitles[5].id}>{props.subtitles[5].label}</h4>
      <h4 id={props.subtitles[6].id}>{props.subtitles[6].label}</h4>
    </AppSimplePageTemplate>
  )
}

export default AlertAndFailurePageView
