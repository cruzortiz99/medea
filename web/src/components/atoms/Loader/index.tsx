import React from "react"
import { Modal, Loader as RSLoader, LoaderProps as RSLoaderProps } from "rsuite"

export type LoaderProps = RSLoaderProps

function Loader(props: RSLoaderProps): JSX.Element {
  return (
    <RSLoader
      center
      backdrop
      size="lg"
      content="Loading..."
      vertical
      style={{ zIndex: 2 }}
      {...props}
    />
  )
}

export default Loader
