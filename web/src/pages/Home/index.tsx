import React from "react"
import { Route, Routes } from "react-router"
import AppMainTemplate from "../../components/templates/AppMainTemplate"
import { AppRoutedPage } from "../../routes/routes"

function App(props: AppRoutedPage) {
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
      </Routes>
    </AppMainTemplate>
  )
}

export default App
