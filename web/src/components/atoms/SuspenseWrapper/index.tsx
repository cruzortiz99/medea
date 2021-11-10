import React, { Suspense } from "react"

export function suspenseWrapper<T>(LazyComponent: React.ExoticComponent<T>) {
  return (props: T) => (
    <Suspense fallback={<h1>Loading please wait</h1>}>
      <LazyComponent {...props} />
    </Suspense>
  )
}
