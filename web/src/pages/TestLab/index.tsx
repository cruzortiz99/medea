import React, { useEffect, useState } from "react"
import { Table } from "rsuite"
import { map, tap } from "rxjs"
import { fromFetch } from "rxjs/fetch"
import { APINoteM3, APIResponse } from "../../models"

function TestPage() {
  const [test, setTest] = useState<APINoteM3[]>([])
  useEffect(() => {
    const getDataPipe = fromFetch<APIResponse<APINoteM3[]>>(
      "http://localhost:5000/api/alerts-and-failures/note-m3",
      {
        mode: "cors",
        method: "GET",
        selector: (response) => response.json(),
      }
    )
      .pipe(tap((responseJson) => console.log(responseJson)))
      .subscribe({
        next: (responseJson) => setTest(responseJson.data),
        error: () => setTest([]),
      })
    return () => {
      getDataPipe.unsubscribe()
    }
  }, [])
  return (
    <>
      <h2>TestLab</h2>
      <Table data={test}>
        <Table.Column>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.Cell dataKey="amount" />
        </Table.Column>
        <Table.Column>
          <Table.HeaderCell>Executor</Table.HeaderCell>
          <Table.Cell dataKey="excecutor" />
        </Table.Column>
        <Table.Column>
          <Table.HeaderCell>Hours</Table.HeaderCell>
          <Table.Cell dataKey="hours" />
        </Table.Column>
        <Table.Column>
          <Table.HeaderCell>Wiht out FF</Table.HeaderCell>
          <Table.Cell dataKey="with_out_ff" />
        </Table.Column>
      </Table>
      <>{console.log(test)}</>
    </>
  )
}

export default TestPage
