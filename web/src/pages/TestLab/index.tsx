import React, { ChangeEvent } from "react"
import AppPlot from "../../components/atoms/AppPlot"
import { Dropdown, DatePicker, InputPicker } from "rsuite"
import { randomColor } from "../../utils/css"

const renderText = (
  props: React.HTMLAttributes<HTMLParagraphElement>, 
  ref: React.LegacyRef<HTMLParagraphElement> | undefined
  ) => {
  return(
    <p {...props} ref={ref}>fecha</p>
  )
}

function TestPage() {

  return (
    <>
      <h2>TestLab</h2>

      <Dropdown renderToggle={renderText} noCaret>
        <Dropdown.Item active>Enero 2021</Dropdown.Item>
        <Dropdown.Item>Febrero 2021</Dropdown.Item>
        <Dropdown.Item>Marzo 2021</Dropdown.Item>
        <Dropdown.Item>Abril 2021</Dropdown.Item>
        <Dropdown.Item>Mayo 2021</Dropdown.Item>
        <Dropdown.Item>Junio 2021</Dropdown.Item>
        <Dropdown.Item>Julio 2021</Dropdown.Item>
        <Dropdown.Item>Agosto 2021</Dropdown.Item>
        <Dropdown.Item>Septiembre 2021</Dropdown.Item>
        <Dropdown.Item>Octubre 2021</Dropdown.Item>
        <Dropdown.Item>Noviembre 2021</Dropdown.Item>
        <Dropdown.Item>Diciembre 2021</Dropdown.Item>
      </Dropdown>
    </>
  )
}

export default TestPage
