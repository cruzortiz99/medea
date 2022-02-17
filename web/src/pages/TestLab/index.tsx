import React, { useEffect, useState } from "react"
import AppPlot from "../../components/atoms/AppPlot"
import AppHeaderMenu from "../../components/molecules/AppHeaderMenu"
import AppHeaderMenuButton from "../../components/atoms/AppHeaderMenuButton"
import { randomColor } from "../../utils/css"
import { async } from "rxjs"


function TestPage() {
  const url = "http://localhost:5000/api/alerts-and-failures/"
  const [test, setTest] = useState([])
  const api = async () => {
    const response = await fetch(url)
    console.log(response.status)
    console.log(response.statusText)
  }
  useEffect(() => {
    api()
  }, [])
  return(
    <>
      <h2>TestLab</h2>
      <h1>{test.map((tests)=>(
        {tests}
      ))}</h1>
    </>
  )
}

export default TestPage
