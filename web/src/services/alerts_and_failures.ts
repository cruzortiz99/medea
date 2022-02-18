import { from, map, Observable, switchMap } from "rxjs"
import { APINoteM2, APINoteM3, APIResponse } from "../models"
import request from "../services"

export function getNoteM3Data(): Observable<APINoteM3[]> {
  return request.get("api/alerts-and-failures/note-m3").pipe(
    switchMap<Response, Observable<APIResponse<APINoteM3[]>>>(
      (response) => from(response.json())),
    map((jsonResponse) => jsonResponse.data)
  )
}

export function getNoteM2Data(): Observable<APINoteM2[]> {
  return request.get("api/alerts-and-failures/note-m2").pipe(
    switchMap<Response, Observable<APIResponse<APINoteM2[]>>>(
      (response) => from(response.json())),
    map((jsonResponse) => jsonResponse.data)
  )
}