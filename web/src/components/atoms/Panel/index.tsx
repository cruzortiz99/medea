import React from "react"
import { Panel, PanelProps } from "rsuite"
import { joinClasses } from "../../../utils/css"
import styles from "./AppPanel.module.css"

function AppPanel(props: PanelProps): JSX.Element {
  return (
    <Panel
      shaded
      {...props}
      className={joinClasses(styles.panel, props.className || "")}
    >
      {props.children}
    </Panel>
  )
}

export default AppPanel
