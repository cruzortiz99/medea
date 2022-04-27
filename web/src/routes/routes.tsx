import { suspenseWrapper } from "../components/atoms/SuspenseWrapper"
import { PAGE_URL } from "../constants"
import {
  About,
  AlertAndFailure,
  Budget,
  Documentation,
  EquipmentHistory,
  Home,
  NotFound,
  Order,
  PreventiveMaintenance,
  UploadFiles,
  TestPage,
  UpdateData,
} from "./lazyComponents"

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
    path: "/*",
    pageName: "Home",
    component: suspenseWrapper(Home),
    routes: [
      {
        path: PAGE_URL.ALERTS_FAILURES,
        pageName: "Avisos y Fallas",
        component: suspenseWrapper(AlertAndFailure),
      },
      {
        path: PAGE_URL.ORDERS,
        pageName: "Ordenes",
        component: suspenseWrapper(Order),
      },
      {
        path: PAGE_URL.BUDGET,
        pageName: "Costos",
        component: suspenseWrapper(Budget),
      },
      {
        path: PAGE_URL.EQUIPMENT_HISTORY,
        pageName: "Historial de Equipos",
        component: suspenseWrapper(EquipmentHistory),
      },
      {
        path: PAGE_URL.PREVENTIVE_MAINTENANCE,
        pageName: "Mantenimiento Preventivo",
        component: suspenseWrapper(PreventiveMaintenance),
      },
      {
        path: PAGE_URL.UPDATE_DATA,
        pageName: "Actualizar Datos",
        component: suspenseWrapper(UpdateData),
      },
      {
        path: PAGE_URL.DOCUMENTATION,
        pageName: "Documentación",
        component: suspenseWrapper(Documentation),
      },
      {
        path: PAGE_URL.ABOUT,
        pageName: "Acerca de",
        component: suspenseWrapper(About),
      },
    ],
  },
  {
    path: PAGE_URL.UPLOAD_FILES,
    pageName: "Upload Files",
    component: suspenseWrapper(UploadFiles),
  },
  {
    path: PAGE_URL.TEST_PAGE,
    pageName: "Test",
    component: suspenseWrapper(TestPage),
  },
  {
    path: PAGE_URL.NOT_FOUND,
    pageName: "Not Found",
    component: suspenseWrapper(NotFound),
  },
]
export default ROUTES
