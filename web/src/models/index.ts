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