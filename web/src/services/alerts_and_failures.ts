import { PlotData } from "plotly.js"
import { from, map, Observable, switchMap } from "rxjs"
import { APINoteM2, APINoteM3, APIResponse } from "../models"
import request from "../services"

export function getNoteM3Data(): Observable<APINoteM3[]> {
  return request.get("/api/alerts-and-failures/table/note-m3").pipe(
    switchMap<Response, Observable<APIResponse<APINoteM3[]>>>((response) =>
      from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}

export function getNoteM2Data(): Observable<APINoteM2[]> {
  return request.get("/api/alerts-and-failures/table/note-m2").pipe(
    switchMap<Response, Observable<APIResponse<APINoteM2[]>>>((response) =>
      from(response.json())
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
  return request.get("api/alerts-and-failures/").pipe(
    switchMap<Response, Observable<APIResponse<Partial<PlotData>[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
export function getDownTimeImpactProductionData(): Observable<
  Partial<PlotData>[]
> {
  return request.get("api/alerts-and-failures/").pipe(
    switchMap<Response, Observable<APIResponse<Partial<PlotData>[]>>>(
      (response) => from(response.json())
    ),
    map((jsonResponse) => jsonResponse.data)
  )
}
