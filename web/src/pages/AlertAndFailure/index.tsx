import React, { useEffect } from "react"
import { AppRoutedPage } from "../../routes/routes"
import homeStore from "../../store/home"
import { useObservable } from "../../utils/rx/hooks"

function AlertAndFailurePage(props: AppRoutedPage) {
  const [_, rightMenuSubject] = useObservable(homeStore.rightMenuOptions)
  useEffect(() => {
    rightMenuSubject.next([
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
    ])
    return () => {
      rightMenuSubject.next([])
    }
  }, [])
  return <h3>Avisos y fallas</h3>
}

export default AlertAndFailurePage
