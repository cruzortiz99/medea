export function getVersion(): string {
  return process.env.REACT_APP_VERSION || ""
}
