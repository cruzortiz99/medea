import React from "react"
import logo from "../../assets/images/logo.svg"
import { AppRoutedPage } from "../../routes/routes"
import "./App.css"

function App(props: AppRoutedPage) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{props.pageName}</h3>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
