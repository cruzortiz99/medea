import React, { ChangeEvent, useState } from "react"
import AppPlot from "../../components/atoms/AppPlot"
import AppHeaderMenu from "../../components/molecules/AppHeaderMenu"
import AppHeaderMenuButton from "../../components/atoms/AppHeaderMenuButton"
import { randomColor } from "../../utils/css"


function TestPage() {
  const [selectedOption, setSelectedOption] = useState("Opcion 1")
  const headerMenu = [
    {
      label: "Opcion 1",
      id: "#option1",
      active: selectedOption === "Opcion 1",
      onClick: () => setSelectedOption("Opcion 1")
    },
    {
      label: "Opcion 2",
      id: "#option2",
      active: selectedOption === "Opcion 2",
      onClick: () => setSelectedOption("Opcion 2")
    },
    {
      label: "Opcion 3",
      id: "#option3",
      active: selectedOption === "Opcion 3",
      onClick: () => setSelectedOption("Opcion 3")
    },
    {
      label: "Opcion 4",
      id: "#option4",
      active: selectedOption === "Opcion 4",
      onClick: () => setSelectedOption("Opcion 4")
    },
    {
      label: "Opcion 5",
      id: "#option5",
      active: selectedOption === "Opcion 5",
      onClick: () => setSelectedOption("Opcion 5")
    },
    {
      label: "Opcion 6",
      id: "#option6",
      active: selectedOption === "Opcion 6",
      onClick: () => setSelectedOption("Opcion 6")
    },
  ]
  return (
    <>
      <h2>TestLab</h2>
      <AppHeaderMenu
        renderToggle={(props, ref)=> {
          return <AppHeaderMenuButton {...props} ref={ref}>
            <h3>{selectedOption}</h3>
          </AppHeaderMenuButton>
        }}
        item={headerMenu.map((subtile) => ({
          label: subtile.label,
          id: subtile.id,
          active: subtile.active,
          onClick: subtile.onClick
        }))}
      />
    </>
  )
}

export default TestPage
