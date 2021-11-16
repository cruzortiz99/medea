import React, { useEffect } from "react"
import { AppRoutedPage } from "../../routes/routes"
import homeStore from "../../store/home"
import { useObservable } from "../../utils/rx/hooks"
import AlertAndFailurePageView from "./view"

function AlertAndFailurePage(props: AppRoutedPage) {
  const [_, rightMenuSubject] = useObservable(homeStore.rightMenuOptions)
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
      plantName="Planta ABC"
      monthAndYear={"Nov 2011"}
      subtitles={rightMenuOptions.map((subtile) => ({
        label: subtile.label,
        id: subtile.href.substring(1),
      }))}
    />
  )
}

export default AlertAndFailurePage
