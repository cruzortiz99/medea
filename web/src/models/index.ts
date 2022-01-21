export type APIEmptyModel = {}
export interface RowDataType {
  dataKey?: string;
  [key: string]: any;
}
export type APINoteM2 = {
  executor: string
  amount: number
  hours: number
  withOutFF: number
}
export type APINoteM3 = {
  executor: string
  amount: number
  hours: number
  withOutFF: number
}
export type APITotalFall = {
  position: number
  tag: string
  description: string
  amount: number
  downTime: number
  acdt: number
}
export type APITotalFaiules = {
  position: number
  tag: string
  description: string
  r3: number
  r2: number
  amount: number
  dtHours: number
}
export type APIEquipmentDownTimeFall = {
  position: number
  tag: string
  description: string
  amount: number
  downTime: number
  acdt: number
}
export type APITeamsImpactProduction = {
  position: number
  tag: string
  description: string
  r3: number
  r2: number
  amount: number
  dtHours: number
}
export type APITpef = {
  position: number
  tag: string
  description: string
  tpef12M: number
  fall12M: number
  tpef24M: number
  fall24M: number
  percent: number
}
export type APIEquipmentTimeOut = {
  position: number
  tag: string
  description: string
  notices: number
  daysDS: number
  reper: number
  order: number
  ctec: string
  noti: string
  ejec: string
  emat: string
  esps: string
  prog: string
  startDate: string
  startTime: string
  endDate: string
  endTime: string
  startFails: string
}
export type APIEquipmentPF = {
  position: number
  notice: number
  tag: string
  description: string
  startDate: string
  days: number
  order: number
  statusODM: string
}
export type APITemporaryRepairs = {
  position: number
  notice: number
  order: number
  tagNotice: string
  description: string
  textOrder: string
  startDate: string
  status: string
  tagODM: string
}