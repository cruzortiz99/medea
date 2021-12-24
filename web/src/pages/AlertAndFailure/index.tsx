import React, { useEffect, useState } from "react"
import { Dropdown } from "rsuite"
import { AppRoutedPage } from "../../routes/routes"
import homeStore from "../../store/home"
import { useObservable } from "../../utils/rx/hooks"
import AlertAndFailurePageView from "./view"

function AlertAndFailurePage(props: AppRoutedPage) {
  const [_, rightMenuSubject] = useObservable(homeStore.rightMenuOptions)
  const [selectedPlant, setSelectedPlant] = useState("Planta ABC")
  const [selectedYear, setSelectedYear] = useState("Noviembre 2021")
  const [selectedEquipament, setSelectedEquipament] = useState("Equipo A")
  const [selectedProcess, setSelectedProcess] = useState("Proceso 1")
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
      monthAndYear={
        <Dropdown
        noCaret
        renderToggle={(props, ref) => (
          <button
          {...props}
          ref={ref}
          style={{padding: 0}}
          >
            <p>{selectedYear}</p>
          </button>
        )}
        >
          <Dropdown.Item
          active={selectedYear === "Enero 2021"}
          onClick={() => setSelectedYear("Enero 2021")}
          >
            Enero 2021
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedYear === "Febrero 2021"}
          onClick={() => setSelectedYear("Febrero 2021")}
          >
            Febrero 2021
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedYear === "Marzo 2021"}
          onClick={() => setSelectedYear("Marzo 2021")}
          >
            Marzo 2021
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedYear === "Abril 2021"}
          onClick={() => setSelectedYear("Abril 2021")}
          >
            Abril 2021
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedYear === "Mayo 2021"}
          onClick={() => setSelectedYear("Mayo 2021")}
          >
            Mayo 2021
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedYear === "Junio 2021"}
          onClick={() => setSelectedYear("Junio 2021")}
          >
            Junio 2021
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedYear === "Julio 2021"}
          onClick={() => setSelectedYear("Julio 2021")}
          >
            Julio 2021
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedYear === "Agosto 2021"}
          onClick={() => setSelectedYear("Agosto 2021")}
          >
            Agosto 2021
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedYear === "Septiembre 2021"}
          onClick={() => setSelectedYear("Septiembre 2021")}
          >
            Septiembre 2021
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedYear === "Octubre 2021"}
          onClick={() => setSelectedYear("Octubre 2021")}
          >
            Octubre 2021
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedYear === "Noviembre 2021"}
          onClick={() => setSelectedYear("Noviembre 2021")}
          >
            Noviembre 2021
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedYear === "Diciembre 2021"}
          onClick={() => setSelectedYear("Diciembre 2021")}
          >
            Diciembre 2021
          </Dropdown.Item>
        </Dropdown>
      }
      equipament={
        <Dropdown
        noCaret
        renderToggle={(props, ref) => (
          <button
          {...props}
          ref={ref}
          style={{padding: 0}}
          >
            <p>{selectedEquipament}</p>
          </button>
        )}
        >
          <Dropdown.Item
          active={selectedEquipament === "Equipo A"}
          onClick={() => setSelectedEquipament("Equipo A")}
          >
            Equipo A
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedEquipament === "Equipo B"}
          onClick={() => setSelectedEquipament("Equipo B")}
          >
            Equipo B
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedEquipament === "Equipo C"}
          onClick={() => setSelectedEquipament("Equipo C")}
          >
            Equipo C
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedEquipament === "Equipo D"}
          onClick={() => setSelectedEquipament("Equipo D")}
          >
            Equipo D
          </Dropdown.Item>
        </Dropdown>
      }
      process={
        <Dropdown
        noCaret
        renderToggle={(props, ref) => (
          <button
          {...props}
          ref={ref}
          style={{padding: 0}}
          >
            <p>{selectedProcess}</p>
          </button>
        )}
        >
          <Dropdown.Item
          active={selectedProcess === "Proceso 1"}
          onClick={() => setSelectedProcess("Proceso 1")}
          >
            Proceso 1
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedProcess === "Proceso 2"}
          onClick={() => setSelectedProcess("Proceso 2")}
          >
            Proceso 2
          </Dropdown.Item>
          <Dropdown.Item
          active={selectedProcess === "Proceso 3"}
          onClick={() => setSelectedProcess("Proceso 3")}
          >
            Proceso 3
          </Dropdown.Item>
        </Dropdown>
      }
      subtitles={rightMenuOptions.map((subtile) => ({
        label: subtile.label,
        id: subtile.href.substring(1),
      }))}
    />
  )
}

export default AlertAndFailurePage
