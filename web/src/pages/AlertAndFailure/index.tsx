import React, { useEffect, useState } from "react"
import AppHeaderMenu from "../../components/molecules/AppHeaderMenu"
import AppHeaderMenuButton from "../../components/atoms/AppHeaderMenuButton"
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
  const plantMenu = [
    {
      label: "Planta ABC",
      id: "#plantaABC",
      active: selectedPlant === "Planta ABC",
      onClick: () => setSelectedPlant("Planta ABC")
    },
    {
      label: "Planta 1",
      id: "#planta1",
      active: selectedPlant === "Planta 1",
      onClick: () => setSelectedPlant("Planta 1")
    },
    {
      label: "Planta 2",
      id: "#planta2",
      active: selectedPlant === "Planta 2",
      onClick: () => setSelectedPlant("Planta 2")
    },
    {
      label: "Planta 3",
      id: "#planta3",
      active: selectedPlant === "Planta 3",
      onClick: () => setSelectedPlant("Planta 3")
    },
  ]
  const yearMenu = [
    {
      label: "Enero 2021",
      id: "#enero2021",
      active: selectedYear === "Enero 2021",
      onClick: () => setSelectedYear("Enero 2021")
    },
    {
      label: "Febrero 2021",
      id: "#febrero2021",
      active: selectedYear === "Febrero 2021",
      onClick: () => setSelectedYear("Febrero 2021")
    },
    {
      label: "Marzo 2021",
      id: "#marzo2021",
      active: selectedYear === "Marzo 2021",
      onClick: () => setSelectedYear("Marzo 2021")
    },
    {
      label: "Abril 2021",
      id: "#abril2021",
      active: selectedYear === "Abril 2021",
      onClick: () => setSelectedYear("Abril 2021")
    },
    {
      label: "Mayo 2021",
      id: "#mayo2021",
      active: selectedYear === "Mayo 2021",
      onClick: () => setSelectedYear("Mayo 2021")
    },
    {
      label: "Junio 2021",
      id: "#junio2021",
      active: selectedYear === "Junio 2021",
      onClick: () => setSelectedYear("Junio 2021")
    },
    {
      label: "Julio 2021",
      id: "#julio2021",
      active: selectedYear === "Julio 2021",
      onClick: () => setSelectedYear("Julio 2021")
    },
    {
      label: "Agosto 2021",
      id: "#agosto2021",
      active: selectedYear === "Agosto 2021",
      onClick: () => setSelectedYear("Agosto 2021")
    },
    {
      label: "Septiembre 2021",
      id: "#septiembre2021",
      active: selectedYear === "Septiembre 2021",
      onClick: () => setSelectedYear("Septiembre 2021")
    },
    {
      label: "Octubre 2021",
      id: "#octubre2021",
      active: selectedYear === "Octubre 2021",
      onClick: () => setSelectedYear("Octubre 2021")
    },
    {
      label: "Noviembre 2021",
      id: "#noviembre2021",
      active: selectedYear === "Noviembre 2021",
      onClick: () => setSelectedYear("Noviembre 2021")
    },
    {
      label: "Diciembre 2021",
      id: "#diciembre2021",
      active: selectedYear === "Diciembre 2021",
      onClick: () => setSelectedYear("Diciembre 2021")
    },
  ]
  const equipamentMenu = [
    {
      label: "Equipo A",
      id: "#equipoB",
      active: selectedEquipament === "Equipo A",
      onClick: () => setSelectedEquipament("Equipo A")
    },
    {
      label: "Equipo B",
      id: "#equipoB",
      active: selectedEquipament === "Equipo B",
      onClick: () => setSelectedEquipament("Equipo B")
    },
    {
      label: "Equipo C",
      id: "#equipoC",
      active: selectedEquipament === "Equipo C",
      onClick: () => setSelectedEquipament("Equipo C")
    },
    {
      label: "Equipo D",
      id: "#equipoC",
      active: selectedEquipament === "Equipo D",
      onClick: () => setSelectedEquipament("Equipo D")
    },
  ]
  const processMenu = [
    {
      label: "Proceso 1",
      id: "#proceso1",
      active: selectedProcess === "Proceso 1",
      onClick: () => setSelectedProcess("Proceso 1")
    },
    {
      label: "Proceso 2",
      id: "#proceso2",
      active: selectedProcess === "Proceso 2",
      onClick: () => setSelectedProcess("Proceso 2")
    },
    {
      label: "Proceso 3",
      id: "#proceso3",
      active: selectedProcess === "Proceso 3",
      onClick: () => setSelectedProcess("Proceso 3")
    },
  ]
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
        <AppHeaderMenu
          renderToggle={(props, ref) => {
            return <AppHeaderMenuButton rprops={props} ref={ref}
            title={<h3>{selectedPlant}</h3>}/>
          }}
          item={plantMenu.map((subtile) => ({
            label: subtile.label,
            id: subtile.id,
            active: subtile.active,
            onClick: subtile.onClick
          }))}
        />
      }
      monthAndYear={
        <AppHeaderMenu
        renderToggle={(props, ref) => {
          return <AppHeaderMenuButton rprops={props} ref={ref}
          title={<p>{selectedYear}</p>}/>
        }}
        item={yearMenu.map((subtile) => ({
          label: subtile.label,
          id: subtile.id,
          active: subtile.active,
          onClick: subtile.onClick
        }))}
      />
      }
      equipment={
        <AppHeaderMenu
        renderToggle={(props, ref) => {
          return <AppHeaderMenuButton rprops={props} ref={ref}
          title={<p>{selectedEquipament}</p>}/>
        }}
        item={equipamentMenu.map((subtile) => ({
          label: subtile.label,
          id: subtile.id,
          active: subtile.active,
          onClick: subtile.onClick
        }))}
      />
      }
      process={
        <AppHeaderMenu
        renderToggle={(props, ref) => {
          return <AppHeaderMenuButton rprops={props} ref={ref}
          title={<p>{selectedProcess}</p>}/>
        }}
        item={processMenu.map((subtile) => ({
          label: subtile.label,
          id: subtile.id,
          active: subtile.active,
          onClick: subtile.onClick
        }))}
      />
      }
      subtitles={rightMenuOptions.map((subtile) => ({
        label: subtile.label,
        id: subtile.href.substring(1),
      }))}
    />
  )
}

export default AlertAndFailurePage
