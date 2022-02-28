import { PlotData } from "plotly.js"
import { from, map, Observable, switchMap } from "rxjs"
import { APIEquipmentDownTimeFall, APINoteM2, APINoteM3, APIResponse, APITeamsImpactProduction, APITotalFailures, APITotalFall } from "../models"
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
  return request.get("/api/alert-and-failures").pipe(
    switchMap<Response, Observable<APIResponse<APITotalFall[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}

export function getTotalFailuresData(): Observable<APITotalFailures[]> {
  return request.get("/api/alert-and-failures").pipe(
    switchMap<Response, Observable<APIResponse<APITotalFailures[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getEquipmentDownTimeFallData(): Observable<APIEquipmentDownTimeFall[]> {
  return request.get("/api/alert-and-failures").pipe(
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
export function getTpefData(): Observable<Partial<PlotData>[]> {
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