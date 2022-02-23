import { Paragraph } from "@rsuite/icons"
import React, { useEffect, useState } from "react"
import { Loader } from "rsuite"
import { catchError, Observable, of } from "rxjs"
import { useObservable } from "../../utils/rx/hooks"

function TestPage() {
  
  return (
    <>
      <h2>TestLab</h2>
      <div>
        <Loader center content="Loading" vertical/>
      </div>
    </>
  )
}

export default TestPage
