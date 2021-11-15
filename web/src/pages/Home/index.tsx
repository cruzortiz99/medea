import React, { useEffect } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router"
import AppMainTemplate from "../../components/templates/AppMainTemplate"
import { PAGE_URL } from "../../constants"
import { AppRoutedPage } from "../../routes/routes"

function App(props: AppRoutedPage) {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(PAGE_URL.ALERTS_FAILURES)
  }, [])
  return (
    <AppMainTemplate>
      <Routes>
        {props.routes?.map((route, key) => (
          <Route
            key={key}
            path={route.path}
            element={<route.component {...route} />}
          />
        ))}
        <Route path="/*" element={<Navigate to={PAGE_URL.NOT_FOUND} />} />
      </Routes>
    </AppMainTemplate>
  )
}

export default App
