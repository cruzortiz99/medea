import { Observable, tap } from "rxjs"
import { fromFetch } from "rxjs/fetch"
import { getAPI_URL } from "../utils/env"

interface ServiceConsumerI {
  get(url: string, customHeaders: Record<string, string>): Observable<Response>
  post<D extends BodyInit | null | undefined>(
    url: string,
    data: D,
    customHeaders: Record<string, string>
  ): Observable<Response>
  put<D extends BodyInit | null | undefined>(
    url: string,
    data: D,
    customHeaders: Record<string, string>
  ): Observable<Response>
  patch<D extends BodyInit | null | undefined>(
    url: string,
    data: D,
    customHeaders: Record<string, string>
  ): Observable<Response>
  delete(
    url: string,
    customHeaders: Record<string, string>
  ): Observable<Response>
  setBaseURL(baseUrl: string): ServiceConsumerI
  setDefaultHeaders(defaultHeaders: Record<string, string>): ServiceConsumerI
}

class ServiceConsumer implements ServiceConsumerI {
  private baseUrl: string
  private defaultHeaders: Record<string, string>
  constructor(baseUrl = "", defaultHeader: Record<string, string> = {}) {
    this.baseUrl = baseUrl
    this.defaultHeaders = defaultHeader
  }
  get(
    url: string,
    customHeaders: Record<string, string> = {}
  ): Observable<Response> {
    return fromFetch(`${this.baseUrl}/${url}`, {
      headers: { ...this.defaultHeaders, ...customHeaders },
      method: "get",
      mode: "cors",
    })
  }
  post<D extends BodyInit | null | undefined>(
    url: string,
    data: D,
    customHeaders: Record<string, string> = {}
  ): Observable<Response> {
    return fromFetch(`${this.baseUrl}/${url}`, {
      headers: { ...this.defaultHeaders, ...customHeaders },
      method: "post",
      mode: "cors",
      body: data,
    })
  }
  put<D extends BodyInit | null | undefined>(
    url: string,
    data: D,
    customHeaders?: Record<string, string>
  ): Observable<Response> {
    return fromFetch(`${this.baseUrl}/${url}`, {
      headers: { ...this.defaultHeaders, ...customHeaders },
      method: "put",
      mode: "cors",
      body: data,
    })
  }
  patch<D extends BodyInit | null | undefined>(
    url: string,
    data: D,
    customHeaders: Record<string, string>
  ): Observable<Response> {
    return fromFetch(`${this.baseUrl}/${url}`, {
      headers: { ...this.defaultHeaders, ...customHeaders },
      method: "patch",
      mode: "cors",
      body: data,
    })
  }
  delete(
    url: string,
    customHeaders: Record<string, string>
  ): Observable<Response> {
    return fromFetch(`${this.baseUrl}/${url}`, {
      headers: { ...this.defaultHeaders, ...customHeaders },
      method: "delete",
      mode: "cors",
    })
  }
  setBaseURL(baseUrl: string): ServiceConsumerI {
    this.baseUrl = baseUrl
    return this
  }
  setDefaultHeaders(defaultHeaders: Record<string, string>): ServiceConsumerI {
    this.defaultHeaders = defaultHeaders
    return this
  }
}
export default new ServiceConsumer(getAPI_URL())
