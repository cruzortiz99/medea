import React, { useEffect, useState } from "react"
import { Container, Table } from "rsuite"
import { async } from "rxjs"
import { APINoteM3 } from "../../models"


function TestPage() {
  const [test, setTest] = useState<APINoteM3[]>([])
  const dataTable =  test.map((item) => (
      {
        executor: item.executor,
        amount: item.amount,
        hours: item.hours,
        withOutFF: item.withOutFF
      }
    )
  )
  
  const dataTest: APINoteM3[] = dataTable
  useEffect(() => {
    fetch("http://localhost:5000/api/alerts-and-failures/note-m3", {mode: "cors", method: "GET"}).then(async (response) => {
      setTest( await response.json())
      console.log(response)
    })
  }, [])
  return(
    <>
      <h2>TestLab</h2>
      <Table
        data={dataTest}
      >
        <Table.Column>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.Cell dataKey="amount"/>
        </Table.Column>
        <Table.Column>
          <Table.HeaderCell>Executor</Table.HeaderCell>
          <Table.Cell dataKey="excecutor"/>
        </Table.Column>
        <Table.Column>
          <Table.HeaderCell>Hours</Table.HeaderCell>
          <Table.Cell dataKey="hours"/>
        </Table.Column>
        <Table.Column>
          <Table.HeaderCell>Wiht out FF</Table.HeaderCell>
          <Table.Cell dataKey="withOutFF"/>
        </Table.Column>
      </Table>
      <>{console.log(test)}</>
    </>
  )
}

export default TestPage
