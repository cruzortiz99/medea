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
  const [isLoadingDataGraphNoteAlert, setIsLoadingDataGraphNoteAlert] =
    useState(true)
  const [isLoadingDataGraphNoticeOrders, setIsLoadingDataGraphNoticeOrders] =
    useState(true)
  const [
    isLoadingDataGraphEquipmentFailures,
    setIsLoadingDataGraphEquipmentFailures,
  ] = useState(true)
  const [
    isLoadingDataGraphProductionLimitation,
    setIsLoadingDataGraphProductionLimitation,
  ] = useState(true)
  const [isLoadingDataGraphDownTimeHours, setIsLoadingDataGraphDownTimeHours] =
    useState(true)
  const [
    isLoadingDataGraphDownTimeImpactProduction,
    setIsLoadingDataGraphDownTimeImpactProduction,
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
  const dataTableTotalFall: APITotalFall[] = [
    {
      position: 1,
      tag: "TP-1220",
      description: "Tapadora de vasos",
      amount: 2,
      downTime: 3.0,
      acdt: 1,
    },
    {
      position: 2,
      tag: "PK-2510",
      description: "Empacadora de vacio",
      amount: 2,
      downTime: 913.84,
      acdt: 1,
    },
    {
      position: 3,
      tag: "Z-1110",
      description: "Volteador de tambores",
      amount: 1,
      downTime: 0.0,
      acdt: 0,
    },
    {
      position: 4,
      tag: "HG-1160A",
      description: "Monogenetizador para queso fundido",
      amount: 1,
      downTime: 9.0,
      acdt: 1,
    },
    {
      position: 5,
      tag: "BD-1130B",
      description: "Mezclador b materia prima (Blender)",
      amount: 1,
      downTime: 9.54,
      acdt: 1,
    },
  ]
  const dataTableTotalFailures: APITotalFailures[] = [
    {
      position: 1,
      tag: "TP-1220",
      description: "Tapadora de vasos",
      r3: 1,
      r2: 1,
      amount: 2,
      dtHours: 3.0,
    },
    {
      position: 2,
      tag: "PK-2510",
      description: "Empacadora de vacío",
      r3: 1,
      r2: 1,
      amount: 2,
      dtHours: 228.5,
    },
    {
      position: 3,
      tag: "Z-1110",
      description: "Volteador de tambores",
      r3: 0,
      r2: 1,
      amount: 1,
      dtHours: 2.3,
    },
    {
      position: 4,
      tag: "HG-1160A",
      description: "Monogenetizador para queso fundido",
      r3: 0,
      r2: 1,
      amount: 1,
      dtHours: 2.3,
    },
    {
      position: 5,
      tag: "BD-1130B",
      description: "Mezclador b materia prima (Blender)",
      r3: 1,
      r2: 0,
      amount: 1,
      dtHours: 2.4,
    },
  ]
  const dataTableEquipmentDownTimeFall: APIEquipmentDownTimeFall[] = [
    {
      position: 1,
      tag: "TP-1220",
      description: "Tapadora de vasos",
      amount: 2,
      downTime: 3.0,
      acdt: 1,
    },
    {
      position: 2,
      tag: "PK-2510",
      description: "Empacadora de vacio",
      amount: 2,
      downTime: 913.84,
      acdt: 1,
    },
    {
      position: 3,
      tag: "Z-1110",
      description: "Volteador de tambores",
      amount: 1,
      downTime: 0.0,
      acdt: 0,
    },
    {
      position: 4,
      tag: "HG-1160A",
      description: "Monogenetizador para queso fundido",
      amount: 1,
      downTime: 9.0,
      acdt: 1,
    },
    {
      position: 5,
      tag: "BD-1130B",
      description: "Mezclador b materia prima (Blender)",
      amount: 1,
      downTime: 9.54,
      acdt: 1,
    },
  ]
  const dataTableTeamsImpactProduction: APITeamsImpactProduction[] = [
    {
      position: 1,
      tag: "TP-1220",
      description: "Tapadora de vasos",
      r3: 1,
      r2: 1,
      amount: 2,
      dtHours: 3.0,
    },
    {
      position: 2,
      tag: "PK-2510",
      description: "Empacadora de vacio",
      r3: 1,
      r2: 1,
      amount: 2,
      dtHours: 228.5,
    },
    {
      position: 3,
      tag: "Z-1110",
      description: "Volteador de tambores",
      r3: 0,
      r2: 1,
      amount: 1,
      dtHours: 2.3,
    },
    {
      position: 4,
      tag: "HG-1160A",
      description: "Monogenetizador para queso fundido",
      r3: 0,
      r2: 1,
      amount: 1,
      dtHours: 2.3,
    },
    {
      position: 5,
      tag: "BD-1130B",
      description: "Mezclador b materia prima (Blender)",
      r3: 1,
      r2: 0,
      amount: 1,
      dtHours: 2.4,
    },
  ]
  const dataTableTpef: APITpef[] = [
    {
      position: 1,
      tag: "NV-3300C",
      description: "Valvulade descarga de paila D3300C",
      tpef12M: 71.67,
      fall12M: 2,
      tpef24M: 2967.28,
      fall24M: 3,
      percent: 98,
    },
    {
      position: 2,
      tag: "FL-1210A",
      description: "Llenadora de vaso",
      tpef12M: 99.3,
      fall12M: 64,
      tpef24M: 162.32,
      fall24M: 91,
      percent: 39,
    },
    {
      position: 3,
      tag: "ET-1340",
      description: "Colocador de mangas",
      tpef12M: 152.64,
      fall12M: 43,
      tpef24M: 254.69,
      fall24M: 59,
      percent: 40,
    },
    {
      position: 4,
      tag: "TP-1220",
      description: "Tapadora de vasos",
      tpef12M: 424.85,
      fall12M: 20,
      tpef24M: 532.69,
      fall24M: 32,
      percent: 20,
    },
    {
      position: 5,
      tag: "Z-1360",
      description: "Envolvedor de cajas (Guillotina)",
      tpef12M: 510.61,
      fall12M: 17,
      tpef24M: 862.41,
      fall24M: 20,
      percent: 20,
    },
  ]
  const dataTableEquipmentTimeOut: APIEquipmentTimeOut[] = [
    {
      position: 1,
      tag: "PK-2510",
      description: "Empaquetadora de vacio",
      notices: 10014964,
      daysDS: 7,
      reper: 3,
      order: 10033815,
      ctec: "",
      noti: "",
      ejec: "",
      emat: "",
      esps: "",
      prog: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      startFails: "20/10/2021",
    },
    {
      position: 2,
      tag: "TP-1220",
      description: "Tapadora de vasos",
      notices: 10014881,
      daysDS: 27,
      reper: 2,
      order: 10033657,
      ctec: "X",
      noti: "X",
      ejec: "X",
      emat: "X",
      esps: "X",
      prog: "X",
      startDate: "30/09/2021",
      startTime: "16:59",
      endDate: "30/09/2021",
      endTime: "17:29",
      startFails: "30/09/2021",
    },
    {
      position: 3,
      tag: "M-2320",
      description: "Maquina ceotrifuga descremadora",
      notices: 10014870,
      daysDS: 29,
      reper: 2,
      order: 10034144,
      ctec: "",
      noti: "",
      ejec: "",
      emat: "",
      esps: "",
      prog: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      startFails: "28/09/2021",
    },
    {
      position: 4,
      tag: "P-2250",
      description: "Bomba transf. de UDF-4 a homog.(ESF4-S)",
      notices: 10014756,
      daysDS: 46,
      reper: 3,
      order: 10033643,
      ctec: "",
      noti: "",
      ejec: "",
      emat: "",
      esps: "",
      prog: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      startFails: "11/09/2021",
    },
    {
      position: 5,
      tag: "E-3100",
      description: "Enfriador de crema",
      notices: 10014754,
      daysDS: 47,
      reper: 2,
      order: 10033550,
      ctec: "",
      noti: "",
      ejec: "",
      emat: "",
      esps: "",
      prog: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      startFails: "10/09/2021",
    },
  ]
  const dataTableEquipmentPF: APIEquipmentPF[] = [
    {
      position: 1,
      notice: 10012812,
      tag: "GM-9601",
      description: "Motor de generador G9601",
      startDate: "26/11/2020",
      days: 335,
      order: 10030648,
      statusODM: "PROG",
    },
    {
      position: 2,
      notice: 10012807,
      tag: "NV-3250",
      description: "Valvula de inyeccion de vapor hiladora",
      startDate: "25/11/2020",
      days: 336,
      order: 10030552,
      statusODM: "ESPR",
    },
    {
      position: 3,
      notice: 10012482,
      tag: "NV-97045",
      description: "Valvula de suministro L1 a ESF-205",
      startDate: "23/10/2020",
      days: 369,
      order: 10030542,
      statusODM: "PROG",
    },
    {
      position: 4,
      notice: 10012482,
      tag: "GM-9600",
      description: "Motor de generador G9600",
      startDate: "28/11/2020",
      days: 394,
      order: 10029872,
      statusODM: "PROG",
    },
    {
      position: 5,
      notice: 10012069,
      tag: "FD-11508",
      description: "Fundidora de queso 500lb (Cosina)",
      startDate: "09/09/2020",
      days: 413,
      order: 10029509,
      statusODM: "EMAT",
    },
  ]
  const dataTableTemporaryRepairs: APITemporaryRepairs[] = [
    {
      position: 1,
      notice: 10014450,
      order: 10033120,
      tagNotice: "HG4100A",
      description: "Homogeneizador A de productos",
      textOrder: "Reemplazar estoperas en Homog UHT",
      startDate: "22/07/2021",
      status: "EMAT",
      tagODM: "HG4100A",
    },
    {
      position: 2,
      notice: 10014401,
      order: 10033061,
      tagNotice: "ZM2442A",
      description: "Motor A de recolector y elevador Z2442",
      textOrder: "Reemplazar Contactor recolector",
      startDate: "14/07/2021",
      status: "PROG",
      tagODM: "Z2442",
    },
    {
      position: 3,
      notice: 10014150,
      order: 10032812,
      tagNotice: "DALPAST",
      description: "Pasteurizacion",
      textOrder: "Remplazar seleccionador y porta",
      startDate: "15/06/2021",
      status: "PROG",
      tagODM: "DALPAST",
    },
    {
      position: 4,
      notice: 10013712,
      order: 10032162,
      tagNotice: "PM1131",
      description: "Motor boma transf. tolva a pulmon P1131",
      textOrder: "Peemplazar LIQUID TIGHT",
      startDate: "06/04/2021",
      status: "ESPR",
      tagODM: "PM1131",
    },
    {
      position: 5,
      notice: 10030636,
      order: 100313376,
      tagNotice: "",
      description: "**Aviso con mas de 2 años / error texto ODM",
      textOrder: "Reemplazar bloque auxiliar y c",
      startDate: "29/01/2021",
      status: "EMAT",
      tagODM: "CYM1201",
    },
  ]
  const dataGraphTpef: Partial<PlotData>[] = [
    {
      x: [9, 4, 9],
      y: [1, 2, 3],
      marker: { color: colors[0] },
      type: "bar",
      orientation: "h",
    },
    {
      x: [8, 3, 8],
      y: [1, 2, 3],
      marker: { color: colors[1] },
      type: "bar",
      orientation: "h",
    },
  ]
  const dataGraphFaultOccurrence: Partial<PlotData>[] = [
    {
      x: [1, 2, 3],
      y: [9, 4, 9],
      marker: { color: colors[0] },
      type: "bar",
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
      isLaodingDataGraphTpef={false}
      isLoadingDataGraphFaultOccurrence={false}
      dataTableNoteM3={dataTableNoteM3 || []}
      dataTableTotalFall={dataTableTotalFall}
      dataTableTotalFailures={dataTableTotalFailures}
      dataTableEquipmentDownTimeFall={dataTableEquipmentDownTimeFall}
      dataTableTeamsImpactProduction={dataTableTeamsImpactProduction}
      dataTableTpef={dataTableTpef}
      dataTableEquipmentTimeOut={dataTableEquipmentTimeOut}
      dataTableEquipmentPF={dataTableEquipmentPF}
      dataTableTemporaryRepairs={dataTableTemporaryRepairs}
      dataGraphNoteAlert={dataGraphNoteAlert || []}
      dataGraphNoticeOrders={dataGraphNoticeOrders || []}
      dataGraphEquipmentFailures={dataGraphEquipmentFailures || []}
      dataGraphDownTimeHours={dataGraphDownTimeHours || []}
      dataGraphProductionLimitation={dataGraphProductionLimitation || []}
      dataGraphDownTimeImpactProduction={
        dataGraphDownTimeImpactProduction || []
      }
      dataGraphTpef={dataGraphTpef}
      dataGraphFaultOccurrence={dataGraphFaultOccurrence}
    />
  )
}

export default AlertAndFailurePage
