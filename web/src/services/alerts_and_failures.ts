import { PlotData } from "plotly.js"
import { from, map, Observable, switchMap } from "rxjs"
import { APIEquipmentDownTimeFall, APIEquipmentPF, APIEquipmentTimeOut, APINoteM2, APINoteM3, APIResponse, APITeamsImpactProduction, APITemporaryRepairs, APITotalFailures, APITotalFall, APITpef } from "../models"
import request from "../services"

export function getNoteM3Data(): Observable<APINoteM3[]> {
  return request.get("/api/alerts-and-failures/table/note-m3").pipe(
    switchMap<Response, Observable<APIResponse<APINoteM3[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}

export function getNoteM2Data(): Observable<APINoteM2[]> {
  return request.get("/api/alerts-and-failures/table/note-m2").pipe(
    switchMap<Response, Observable<APIResponse<APINoteM2[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}

export function getTotalFallData(): Observable<APITotalFall[]> {
  return request.get("/api/alerts-and-failures/table/total-failures").pipe(
    switchMap<Response, Observable<APIResponse<APITotalFall[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}

export function getTotalFailuresData(): Observable<APITotalFailures[]> {
  return request.get("/api/alerts-and-failures/table/total-failures-production-effect").pipe(
    switchMap<Response, Observable<APIResponse<APITotalFailures[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getEquipmentDownTimeFallData(): Observable<APIEquipmentDownTimeFall[]> {
  return request.get("/api/alerts-and-failures/table/equipment-downtime-per-failure").pipe(
    switchMap<
      Response, 
      Observable<APIResponse<APIEquipmentDownTimeFall[]>>
    >(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getTeamsImpactProductionData(): Observable<APITeamsImpactProduction[]> {
  return request.get("/api/alert-and-failures").pipe(
    switchMap<
      Response, 
      Observable<APIResponse<APITeamsImpactProduction[]>>
    >(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getTableTpefData(): Observable<APITpef[]> {
  return request.get("/api/alert-and-failures").pipe(
    switchMap<Response, Observable<APIResponse<APITpef[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getEquipmentTimeOutData(): Observable<APIEquipmentTimeOut[]> {
  return request.get("/api/alert-and-failures").pipe(
    switchMap<Response, Observable<APIResponse<APIEquipmentTimeOut[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getEquipmentPFData(): Observable<APIEquipmentPF[]> {
  return request.get("/api/alert-and-failures").pipe(
    switchMap<Response, Observable<APIResponse<APIEquipmentPF[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getTemporaryRepairsData(): Observable<APITemporaryRepairs[]> {
  return request.get("/api/alert-and-failures").pipe(
    switchMap<Response, Observable<APIResponse<APITemporaryRepairs[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getNoteAlertData(): Observable<Partial<PlotData>[]> {
  return request.get("api/alerts-and-failures/graph/alerted-vs-closed").pipe(
    switchMap<Response, Observable<APIResponse<Partial<PlotData>[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}

export function getNoticeOrdersData(): Observable<Partial<PlotData>[]> {
  return request.get("api/alerts-and-failures/").pipe(
    switchMap<Response, Observable<APIResponse<Partial<PlotData>[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}

export function getEquipmentFailuresData(): Observable<Partial<PlotData>[]> {
  return request.get("/api/alerts-and-failures/graph/failures-equipments").pipe(
    switchMap<Response, Observable<APIResponse<Partial<PlotData>[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getProductionLimitationData(): Observable<Partial<PlotData>[]> {
  return request.get("api/alerts-and-failures/").pipe(
    switchMap<Response, Observable<APIResponse<Partial<PlotData>[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getDownTimeHoursData(): Observable<Partial<PlotData>[]> {
  return request.get("/api/alerts-and-failures/graph/down-time").pipe(
    switchMap<Response, Observable<APIResponse<Partial<PlotData>[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getDownTimeImpactProductionData(): Observable<
  Partial<PlotData>[]
> {
  return request.get("/api/alerts-and-failures/graph/down-time-production-impact").pipe(
    switchMap<Response, Observable<APIResponse<Partial<PlotData>[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getGraphTpefData(): Observable<Partial<PlotData>[]> {
  return request.get("api/alerts-and-failures/").pipe(
    switchMap<Response, Observable<APIResponse<Partial<PlotData>[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getFaultOccurrenceData(): Observable<Partial<PlotData>[]> {
  return request.get("api/alerts-and-failures/").pipe(
    switchMap<Response, Observable<APIResponse<Partial<PlotData>[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}