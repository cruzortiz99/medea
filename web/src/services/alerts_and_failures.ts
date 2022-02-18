import { from, map, Observable, switchMap } from "rxjs"
import { APINoteM3, APIResponse } from "../models"
import request from "../services"

export function getNoteM3Data(): Observable<APINoteM3[]> {
  return request.get("api/alerts-and-failures/note-m3").pipe(
    switchMap<Response, Observable<APIResponse<APINoteM3[]>>>(
      (response) => from(response.json())),
    map((jsonResponse) => jsonResponse.data)
  )
}