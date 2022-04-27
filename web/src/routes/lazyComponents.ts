import React from "react"

export const Home = React.lazy(() => import("../pages/Home"))
export const AlertAndFailure = React.lazy(
  () => import("../pages/AlertAndFailure")
)
export const Order = React.lazy(() => import("../pages/Order"))
export const Budget = React.lazy(() => import("../pages/Budget"))
export const EquipmentHistory = React.lazy(
  () => import("../pages/EquipmentHistory")
)
export const PreventiveMaintenance = React.lazy(
  () => import("../pages/PreventiveMaintenance")
)
export const UpdateData = React.lazy(() => import("../pages/UpdateData"))
export const Documentation = React.lazy(() => import("../pages/Documentation"))
export const About = React.lazy(() => import("../pages/About"))
export const UploadFiles = React.lazy(() => import("../pages/UploadFiles"))
export const NotFound = React.lazy(() => import("../pages/NotFound"))
export const TestPage = React.lazy(() => import("../pages/TestLab"))
