import { PlotData } from "plotly.js"
import React, { useEffect, useState } from "react"
import { catchError, Observable, of, switchMap, tap } from "rxjs"
import AppHeaderMenuButton from "../../components/atoms/AppHeaderMenuButton"
import AppHeaderMenu from "../../components/molecules/AppHeaderMenu"
import {
  APIEquipmentDownTimeFall,
  APIEquipmentPF,
  APIEquipmentTimeOut,
  APINoteM2,
  APINoteM3,
  APITeamsImpactProduction,
  APITemporaryRepairs,
  APITotalFailures,
  APITotalFall,
  APITpef,
} from "../../models"
import { AppRoutedPage } from "../../routes/routes"
import {
  getNoteM2Data,
  getNoteM3Data,
  getNoteAlertData,
  getNoticeOrdersData,
  getEquipmentFailuresData,
  getProductionLimitationData,
  getDownTimeHoursData,
  getDownTimeImpactProductionData,
  getGraphTpefData,
  getFaultOccurrenceData,
  getTotalFallData,
  getTotalFailuresData,
  getEquipmentDownTimeFallData,
  getTeamsImpactProductionData,
  getTableTpefData,
  getEquipmentTimeOutData,
  getEquipmentPFData,
  getTemporaryRepairsData,
} from "../../services/alerts_and_failures"
import homeStore from "../../store/home"
import { randomColor } from "../../utils/css"
import { useObservable } from "../../utils/rx/hooks"
import AlertAndFailurePageView from "./view"

function AlertAndFailurePage(props: AppRoutedPage) {
  const [_, rightMenuSubject] = useObservable(homeStore.rightMenuOptions)
  const [selectedPlant, setSelectedPlant] = useState("Planta ABC")
  const [selectedYear, setSelectedYear] = useState("Noviembre 2021")
  const [selectedEquipment, setSelectedEquipment] = useState("Equipo A")
  const [selectedProcess, setSelectedProcess] = useState("Proceso 1")
  const [isLoadingDataTableM2, setIsLoadingDataTableM2] = useState(true)
  const [isLoadingDataTableM3, setIsLoadingDataTableM3] = useState(true)
  const [
    isLoadingDataTableTotalFall, 
    setIsLoadingDataTableTotalFall
  ] = useState(true)
  const [
    isLoadingDataTableTotalFailures,
    setIsLoadingDataTableTotalFailures
  ] = useState(true)
  const [
    isLoadingDataTableEquipmentDownTimeFall,
    setIsLoadingDataTableEquipmentDownTimeFall
  ] = useState(true)
  const [
    isLoadingDataTableTeamsImpactProduction,
    setIsLoadingDataTableTeamsImpactProduction
  ] = useState(true)
  const [
    isLoadingdDataTableTpef,
    setIsLoadingDataTableTpef
  ] = useState(true)
  const [
    isLoadingDataTableEquipmentTimeOut,
    setIsLoadingDataTableEquipmentTimeOut
  ] = useState(true)
   const [
     isLoadingDataTableEquipmentPF,
     setIsLoadingDataTableEquipmentPF
   ] = useState(true)
  const [
    isLoadingDataTableTemporaryRepairs,
    setIsLoadingDataTableTemporaryRepairs
  ] = useState(true)
  const [
    isLoadingDataGraphNoteAlert, 
    setIsLoadingDataGraphNoteAlert
  ] = useState(true)
  const [
    isLoadingDataGraphNoticeOrders, 
    setIsLoadingDataGraphNoticeOrders
  ] = useState(true)
  const [
    isLoadingDataGraphEquipmentFailures,
    setIsLoadingDataGraphEquipmentFailures,
  ] = useState(true)
  const [
    isLoadingDataGraphProductionLimitation,
    setIsLoadingDataGraphProductionLimitation,
  ] = useState(true)
  const [
    isLoadingDataGraphDownTimeHours, 
    setIsLoadingDataGraphDownTimeHours
  ] = useState(true)
  const [
    isLoadingDataGraphDownTimeImpactProduction,
    setIsLoadingDataGraphDownTimeImpactProduction,
  ] = useState(true)
  const [isLoadingDataGraphTpef, setIsLoadingDataGraphTpef] = useState(true)
  const [
    isLoadingDataGraphFaultOccurrence, 
    setIsLoadingDataGraphFaultOccurrence
  ] = useState(true)
  
  const [dataTableNoteM2] = useObservable<APINoteM2[], Observable<APINoteM2[]>>(
    of(true).pipe(
      tap(() => setIsLoadingDataTableM2(true)),
      switchMap(() =>
        getNoteM2Data().pipe(tap(() => setIsLoadingDataTableM2(false)))
      ),
      catchError(() => of([]).pipe(tap(() => setIsLoadingDataTableM2(false))))
    )
  )
  const [dataTableNoteM3] = useObservable<APINoteM3[], Observable<APINoteM3[]>>(
    of(true).pipe(
      tap(() => setIsLoadingDataTableM3(true)),
      switchMap(() =>
        getNoteM3Data().pipe(tap(() => setIsLoadingDataTableM3(false)))
      ),
      catchError(() => of([]).pipe(tap(() => setIsLoadingDataTableM3(false))))
    )
  )
  const [dataTableTotalFall] = useObservable<
    APITotalFall[], 
    Observable<APITotalFall[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataTableTotalFall(true)),
      switchMap(() =>
        getTotalFallData().pipe(
          tap(() => setIsLoadingDataTableTotalFall(false))
        )
      ),
      catchError(() =>
          of([]).pipe(tap(() => setIsLoadingDataTableTotalFall(false)))
      )
    )
  )
  const [dataTableTotalFailures] = useObservable<
    APITotalFailures[],
    Observable<APITotalFailures[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataTableTotalFailures(true)),
      switchMap(() =>
        getTotalFailuresData().pipe(
          tap(() => setIsLoadingDataTableTotalFailures(false))
        )
      ),
      catchError(() =>
        of([]).pipe(
          tap(() => setIsLoadingDataTableTotalFailures(false))
        )
      )
    )
  )
  const [dataTableEquipmentDownTimeFall] = useObservable<
    APIEquipmentDownTimeFall[],
    Observable<APIEquipmentDownTimeFall[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataTableEquipmentDownTimeFall(true)),
      switchMap(() => 
        getEquipmentDownTimeFallData().pipe(
          tap(
            () => setIsLoadingDataTableEquipmentDownTimeFall(false)
          )
        )
      ),
      catchError(() => 
        of([]).pipe(
          tap(
            () => setIsLoadingDataTableEquipmentDownTimeFall(false)
          )
        )
      )
    )
  )
  const [dataTableTeamsImpactProduction] = useObservable<
    APITeamsImpactProduction[],
    Observable<APITeamsImpactProduction[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataTableTeamsImpactProduction(true)),
      switchMap(() => 
        getTeamsImpactProductionData().pipe(
          tap(
            () => setIsLoadingDataTableTeamsImpactProduction(false)
          )
        )
      ),
      catchError(() =>
        of([]).pipe(
          tap(
            () => setIsLoadingDataTableTeamsImpactProduction(false)
          )
        )
      )
    )
  )
  const [dataTableTpef] = useObservable<
    APITpef[],
    Observable<APITpef[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataTableTpef(true)),
      switchMap(() =>
        getTableTpefData().pipe(
          tap(() => setIsLoadingDataTableTpef(false))
        )
      ),
      catchError(() => 
        of([]).pipe(tap(() => setIsLoadingDataTableTpef(false)))
      )
    )
  )
  const [dataTableEquipmentTimeOut] = useObservable<
    APIEquipmentTimeOut[],
    Observable<APIEquipmentTimeOut[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataTableEquipmentTimeOut(true)),
      switchMap(() => 
        getEquipmentTimeOutData().pipe(
          tap(() => setIsLoadingDataTableEquipmentTimeOut(false))
        )
      ),
      catchError(() => 
        of([]).pipe(
          tap(() => setIsLoadingDataTableEquipmentTimeOut(false))
        )
      )
    )
  )
  const [dataTableEquipmentPF] = useObservable<
    APIEquipmentPF[],
    Observable<APIEquipmentPF[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataTableEquipmentPF(true)),
      switchMap(() => 
        getEquipmentPFData().pipe(
          tap(() => setIsLoadingDataTableEquipmentPF(false))
        )
      ),
      catchError(() => 
        of([]).pipe(
          tap(() => setIsLoadingDataTableEquipmentPF(false))
        )
      )
    )
  )
  const [dataTableTemporaryRepairs] = useObservable<
    APITemporaryRepairs[],
    Observable<APITemporaryRepairs[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataTableTemporaryRepairs(true)),
      switchMap(() => 
        getTemporaryRepairsData().pipe(
          tap(() => setIsLoadingDataTableTemporaryRepairs(false))
        )
      ),
      catchError(() => 
        of([]).pipe(
          tap(() => setIsLoadingDataTableTemporaryRepairs(false))
        )
      )
    )
  )
  const [dataGraphNoteAlert] = useObservable<
    Partial<PlotData>[],
    Observable<Partial<PlotData>[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataGraphNoteAlert(true)),
      switchMap(() =>
        getNoteAlertData().pipe(
          tap(() => setIsLoadingDataGraphNoteAlert(false))
        )
      ),
      catchError(() =>
        of([]).pipe(tap(() => setIsLoadingDataGraphNoteAlert(false)))
      )
    )
  )
  const [dataGraphNoticeOrders] = useObservable<
    Partial<PlotData>[],
    Observable<Partial<PlotData>[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataGraphNoticeOrders(true)),
      switchMap(() =>
        getNoticeOrdersData().pipe(
          tap(() => setIsLoadingDataGraphNoticeOrders(false))
        )
      ),
      catchError(() =>
        of([]).pipe(tap(() => setIsLoadingDataGraphNoticeOrders(false)))
      )
    )
  )
  const [dataGraphEquipmentFailures] = useObservable<
    Partial<PlotData>[],
    Observable<Partial<PlotData>[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataGraphEquipmentFailures(true)),
      switchMap(() =>
        getEquipmentFailuresData().pipe(
          tap(() => setIsLoadingDataGraphEquipmentFailures(false))
        )
      ),
      catchError(() =>
        of([]).pipe(tap(() => setIsLoadingDataGraphEquipmentFailures(false)))
      )
    )
  )
  const [dataGraphProductionLimitation] = useObservable<
    Partial<PlotData>[],
    Observable<Partial<PlotData>[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataGraphProductionLimitation(true)),
      switchMap(() =>
        getProductionLimitationData().pipe(
          tap(() => setIsLoadingDataGraphProductionLimitation(false))
        )
      ),
      catchError(() =>
        of([]).pipe(tap(() => setIsLoadingDataGraphProductionLimitation(false)))
      )
    )
  )
  const [dataGraphDownTimeHours] = useObservable<
    Partial<PlotData>[],
    Observable<Partial<PlotData>[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataGraphDownTimeHours(true)),
      switchMap(() =>
        getDownTimeHoursData().pipe(
          tap(() => setIsLoadingDataGraphDownTimeHours(false))
        )
      ),
      catchError(() =>
        of([]).pipe(tap(() => setIsLoadingDataGraphDownTimeHours(false)))
      )
    )
  )
  const [dataGraphDownTimeImpactProduction] = useObservable<
    Partial<PlotData>[],
    Observable<Partial<PlotData>[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataGraphDownTimeImpactProduction(true)),
      switchMap(() =>
        getDownTimeImpactProductionData().pipe(
          tap(() => setIsLoadingDataGraphDownTimeImpactProduction(false))
        )
      ),
      catchError(() =>
        of([]).pipe(
          tap(() => setIsLoadingDataGraphDownTimeImpactProduction(false))
        )
      )
    )
  )
  const [dataGraphTpef] = useObservable<
    Partial<PlotData>[], 
    Observable<Partial<PlotData>[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataGraphTpef(true)),
      switchMap(() => 
        getGraphTpefData().pipe(
          tap(() => setIsLoadingDataGraphTpef(false))
        )
      ),
      catchError(() => 
        of([]).pipe(
            tap(() => setIsLoadingDataGraphTpef(false))
        )
      )
    )
  )
  const [dataGraphFaultOccurrence] = useObservable<
    Partial<PlotData>[],
    Observable<Partial<PlotData>[]>
  >(
    of(true).pipe(
      tap(() => setIsLoadingDataGraphFaultOccurrence(true)),
      switchMap(() => 
        getFaultOccurrenceData().pipe(
          tap(() => setIsLoadingDataGraphFaultOccurrence(false))
        )
      ),
      catchError(() => 
        of([]).pipe(
            tap(() => setIsLoadingDataGraphFaultOccurrence(false))
        ))
    )
  )
  const [colors] = useState<string[]>([
    randomColor(),
    randomColor(),
    randomColor(),
  ])
  const plantMenu = [
    {
      label: "Planta ABC",
      id: "#plantaABC",
      active: selectedPlant === "Planta ABC",
      onClick: () => setSelectedPlant("Planta ABC"),
    },
    {
      label: "Planta 1",
      id: "#planta1",
      active: selectedPlant === "Planta 1",
      onClick: () => setSelectedPlant("Planta 1"),
    },
    {
      label: "Planta 2",
      id: "#planta2",
      active: selectedPlant === "Planta 2",
      onClick: () => setSelectedPlant("Planta 2"),
    },
    {
      label: "Planta 3",
      id: "#planta3",
      active: selectedPlant === "Planta 3",
      onClick: () => setSelectedPlant("Planta 3"),
    },
  ]
  const yearMenu = [
    {
      label: "Enero 2021",
      id: "#enero2021",
      active: selectedYear === "Enero 2021",
      onClick: () => setSelectedYear("Enero 2021"),
    },
    {
      label: "Febrero 2021",
      id: "#febrero2021",
      active: selectedYear === "Febrero 2021",
      onClick: () => setSelectedYear("Febrero 2021"),
    },
    {
      label: "Marzo 2021",
      id: "#marzo2021",
      active: selectedYear === "Marzo 2021",
      onClick: () => setSelectedYear("Marzo 2021"),
    },
    {
      label: "Abril 2021",
      id: "#abril2021",
      active: selectedYear === "Abril 2021",
      onClick: () => setSelectedYear("Abril 2021"),
    },
    {
      label: "Mayo 2021",
      id: "#mayo2021",
      active: selectedYear === "Mayo 2021",
      onClick: () => setSelectedYear("Mayo 2021"),
    },
    {
      label: "Junio 2021",
      id: "#junio2021",
      active: selectedYear === "Junio 2021",
      onClick: () => setSelectedYear("Junio 2021"),
    },
    {
      label: "Julio 2021",
      id: "#julio2021",
      active: selectedYear === "Julio 2021",
      onClick: () => setSelectedYear("Julio 2021"),
    },
    {
      label: "Agosto 2021",
      id: "#agosto2021",
      active: selectedYear === "Agosto 2021",
      onClick: () => setSelectedYear("Agosto 2021"),
    },
    {
      label: "Septiembre 2021",
      id: "#septiembre2021",
      active: selectedYear === "Septiembre 2021",
      onClick: () => setSelectedYear("Septiembre 2021"),
    },
    {
      label: "Octubre 2021",
      id: "#octubre2021",
      active: selectedYear === "Octubre 2021",
      onClick: () => setSelectedYear("Octubre 2021"),
    },
    {
      label: "Noviembre 2021",
      id: "#noviembre2021",
      active: selectedYear === "Noviembre 2021",
      onClick: () => setSelectedYear("Noviembre 2021"),
    },
    {
      label: "Diciembre 2021",
      id: "#diciembre2021",
      active: selectedYear === "Diciembre 2021",
      onClick: () => setSelectedYear("Diciembre 2021"),
    },
  ]
  const equipamentMenu = [
    {
      label: "Equipo A",
      id: "#equipoA",
      active: selectedEquipment === "Equipo A",
      onClick: () => setSelectedEquipment("Equipo A"),
    },
    {
      label: "Equipo B",
      id: "#equipoB",
      active: selectedEquipment === "Equipo B",
      onClick: () => setSelectedEquipment("Equipo B"),
    },
    {
      label: "Equipo C",
      id: "#equipoC",
      active: selectedEquipment === "Equipo C",
      onClick: () => setSelectedEquipment("Equipo C"),
    },
    {
      label: "Equipo D",
      id: "#equipoD",
      active: selectedEquipment === "Equipo D",
      onClick: () => setSelectedEquipment("Equipo D"),
    },
  ]
  const processMenu = [
    {
      label: "Proceso 1",
      id: "#proceso1",
      active: selectedProcess === "Proceso 1",
      onClick: () => setSelectedProcess("Proceso 1"),
    },
    {
      label: "Proceso 2",
      id: "#proceso2",
      active: selectedProcess === "Proceso 2",
      onClick: () => setSelectedProcess("Proceso 2"),
    },
    {
      label: "Proceso 3",
      id: "#proceso3",
      active: selectedProcess === "Proceso 3",
      onClick: () => setSelectedProcess("Proceso 3"),
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
            return (
              <AppHeaderMenuButton {...props} ref={ref}>
                <h3>{selectedPlant}</h3>
              </AppHeaderMenuButton>
            )
          }}
          item={plantMenu.map((subtile) => ({
            label: subtile.label,
            id: subtile.id,
            active: subtile.active,
            onClick: subtile.onClick,
          }))}
        />
      }
      monthAndYear={
        <AppHeaderMenu
          renderToggle={(props, ref) => {
            return (
              <AppHeaderMenuButton {...props} ref={ref}>
                <p>{selectedYear}</p>
              </AppHeaderMenuButton>
            )
          }}
          item={yearMenu.map((subtile) => ({
            label: subtile.label,
            id: subtile.id,
            active: subtile.active,
            onClick: subtile.onClick,
          }))}
        />
      }
      equipment={
        <AppHeaderMenu
          renderToggle={(props, ref) => {
            return (
              <AppHeaderMenuButton {...props} ref={ref}>
                <p>{selectedEquipment}</p>
              </AppHeaderMenuButton>
            )
          }}
          item={equipamentMenu.map((subtile) => ({
            label: subtile.label,
            id: subtile.id,
            active: subtile.active,
            onClick: subtile.onClick,
          }))}
        />
      }
      process={
        <AppHeaderMenu
          renderToggle={(props, ref) => {
            return (
              <AppHeaderMenuButton {...props} ref={ref}>
                <p>{selectedProcess}</p>
              </AppHeaderMenuButton>
            )
          }}
          item={processMenu.map((subtile) => ({
            label: subtile.label,
            id: subtile.id,
            active: subtile.active,
            onClick: subtile.onClick,
          }))}
        />
      }
      subtitles={rightMenuOptions.map((subtile) => ({
        label: subtile.label,
        id: subtile.href.substring(1),
      }))}
      dataTableNoteM2={dataTableNoteM2 || []}
      isLoadingDataTableNoteM2={isLoadingDataTableM2}
      isLoadingDataTableNoteM3={isLoadingDataTableM3}
      isLoadingDataTableTotalFall={isLoadingDataTableTotalFall}
      isLoadingDataTableTotalFailures={isLoadingDataTableTotalFailures}
      isLoadingDataTableEquipmentDownTimeFall={isLoadingDataTableEquipmentDownTimeFall}
      isLoadingDataTableTeamsImpactProduction={isLoadingDataTableTeamsImpactProduction}
      isLoadingDataTableTpef={isLoadingdDataTableTpef}
      isLoadingDataTableEquipmentTimeOut={isLoadingDataTableEquipmentTimeOut}
      isLoadingDataTableEquipmentPF={isLoadingDataTableEquipmentPF}
      isLoadingDataTableTemporaryRepairs={isLoadingDataTableTemporaryRepairs}
      isLoadingDataGraphNoteAlert={isLoadingDataGraphNoteAlert}
      isLoadingDataGraphEquipmentFailures={isLoadingDataGraphEquipmentFailures}
      isLoadingDataGraphNoticeOrders={isLoadingDataGraphNoticeOrders}
      isLoadingDataGraphDownTimeHours={isLoadingDataGraphDownTimeHours}
      isLoadingDataGraphProductionLimitation={
        isLoadingDataGraphProductionLimitation
      }
      isLoadingDataGraphDownTimeImpactProduction={
        isLoadingDataGraphDownTimeImpactProduction
      }
      isLaodingDataGraphTpef={isLoadingDataGraphTpef}
      isLoadingDataGraphFaultOccurrence={isLoadingDataGraphFaultOccurrence}
      dataTableNoteM3={dataTableNoteM3 || []}
      dataTableTotalFall={dataTableTotalFall || []}
      dataTableTotalFailures={dataTableTotalFailures || []}
      dataTableEquipmentDownTimeFall={
        dataTableEquipmentDownTimeFall || []
      }
      dataTableTeamsImpactProduction={
        dataTableTeamsImpactProduction || []
      }
      dataTableTpef={dataTableTpef || []}
      dataTableEquipmentTimeOut={dataTableEquipmentTimeOut || []}
      dataTableEquipmentPF={dataTableEquipmentPF || []}
      dataTableTemporaryRepairs={dataTableTemporaryRepairs || []}
      dataGraphNoteAlert={dataGraphNoteAlert || []}
      dataGraphNoticeOrders={dataGraphNoticeOrders || []}
      dataGraphEquipmentFailures={dataGraphEquipmentFailures || []}
      dataGraphDownTimeHours={dataGraphDownTimeHours || []}
      dataGraphProductionLimitation={
        dataGraphProductionLimitation || []
      }
      dataGraphDownTimeImpactProduction={
        dataGraphDownTimeImpactProduction || []
      }
      dataGraphTpef={dataGraphTpef || []}
      dataGraphFaultOccurrence={dataGraphFaultOccurrence || []}
    />
  )
}

export default AlertAndFailurePage
