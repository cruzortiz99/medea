import React, { Suspense } from "react"
import Loader from "../Loader"
export function suspenseWrapper<T>(LazyComponent: React.ExoticComponent<T>) {
  return (props: T) => (
    <Suspense fallback={<Loader />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}
