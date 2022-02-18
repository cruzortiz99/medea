export function getVersion(): string {
  return process.env.REACT_APP_VERSION || ""
}
export function getAPI_URL(): string {
  return process.env.REACT_APP_API_URL || ""
}
