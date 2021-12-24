import React, { useEffect, useState } from "react"
import { Dropdown } from "rsuite"
import { AppRoutedPage } from "../../routes/routes"
import homeStore from "../../store/home"
import { useObservable } from "../../utils/rx/hooks"
import AlertAndFailurePageView from "./view"

function AlertAndFailurePage(props: AppRoutedPage) {
  const [_, rightMenuSubject] = useObservable(homeStore.rightMenuOptions)
  const [selectedPlant, setSelectedPlant] = useState("Planta ABC")
  const rightMenuOptions = [
    {
      label: "Avisos",
      href: "#alerts",
    },
    {
      label: "Fallas",
      href: "#failures",
    },
    {
      label: "Equipos fuera de servicio",
      href: "#eqs-out-of-service",
    },
    {
      label: "Equipos en segmento PF",
      href: "#eqs-pf",
    },
    {
      label: "Reparaciones Temporales",
      href: "#temp-fix",
    },
    {
      label: "Requeridos por SHA",
      href: "#req-by-sha",
    },
    {
      label: "Historial de trabajos",
      href: "#work-history",
    },
  ]
  useEffect(() => {
    rightMenuSubject.next(rightMenuOptions)
    return () => {
      rightMenuSubject.next([])
    }
  }, [])
  return (
    <AlertAndFailurePageView
      plantName={
        <Dropdown
          noCaret
          renderToggle={(props, ref) => (
            <button
              {...props}
              ref={ref}
              style={{ backgroundColor: "#fff", padding: 0 }}
            >
              <h3>{selectedPlant}</h3>
            </button>
          )}
        >
          <Dropdown.Item
            active={selectedPlant === "Planta ABC"}
            onClick={() => setSelectedPlant("Planta ABC")}
          >
            Planta ABC
          </Dropdown.Item>
          <Dropdown.Item
            active={selectedPlant === "Planta 1"}
            onClick={() => setSelectedPlant("Planta 1")}
          >
            Planta 1
          </Dropdown.Item>
          <Dropdown.Item
            active={selectedPlant === "Planta 2"}
            onClick={() => setSelectedPlant("Planta 2")}
          >
            Planta 2
          </Dropdown.Item>
          <Dropdown.Item
            active={selectedPlant === "Planta 3"}
            onClick={() => setSelectedPlant("Planta 3")}
          >
            Planta 3
          </Dropdown.Item>
        </Dropdown>
      }
      monthAndYear={"Noviembre 2021"}
      subtitles={rightMenuOptions.map((subtile) => ({
        label: subtile.label,
        id: subtile.href.substring(1),
      }))}
    />
  )
}

export default AlertAndFailurePage
