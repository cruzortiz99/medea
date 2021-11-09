import React from "react"
import { Route, Routes } from "react-router"
import { AppRoute } from "./routes"
export type AppRouterProps = {
  routes: AppRoute[]
}
function AppRouter(props: AppRouterProps): JSX.Element {
  return (
    <Routes>
      {props.routes.map((route, key) => (
        <Route
          key={key}
          path={route.path}
          element={<route.component {...route} />}
        />
      ))}
    </Routes>
  )
}

export default React.memo(AppRouter)
