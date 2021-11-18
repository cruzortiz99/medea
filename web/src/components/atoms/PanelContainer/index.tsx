import React from "react"
import { Grid, GridProps } from "rsuite"
import { joinClasses } from "../../../utils/css"
import styles from "./AppPanelContainer.module.css"
function AppPanelContainer(props: GridProps): JSX.Element {
  return (
    <Grid
      fluid
      {...props}
      className={joinClasses(
        styles.fullWidth,
        styles.panelContainer,
        props.className || ""
      )}
    >
      {props.children}
    </Grid>
  )
}

export default AppPanelContainer
