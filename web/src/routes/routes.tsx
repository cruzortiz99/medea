import React from "react"
import { suspenseWrapper } from "../components/atoms/SuspenseWrapper"
import { Home } from "./lazyComponents"

export type AppRoute = AppRoutedPage & {
  path: string
  component: (props: AppRoutedPage) => JSX.Element
}

export type AppRoutedPage = {
  pageName: string
  routes?: AppRoute[]
}
const ROUTES: AppRoute[] = [
  {
    path: "/",
    pageName: "Home",
    component: suspenseWrapper(Home),
  },
]
export default ROUTES
