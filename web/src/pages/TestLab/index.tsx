import React from "react"
import { Table } from "rsuite"
import { catchError, Observable, of } from "rxjs"
import { APINoteM3 } from "../../models"
import { getNoteM3Data } from "../../services/alerts_and_failures"
import { useObservable } from "../../utils/rx/hooks"

function TestPage() {
  const [test] = useObservable<APINoteM3[], Observable<APINoteM3[]>>(
    getNoteM3Data().pipe(catchError(() => of([])))
  )
  return (
    <>
      <h2>TestLab</h2>
      <Table
        data={
          test?.map((noteM3) => ({
            executor: noteM3.excecutor,
            amount: noteM3.amount,
            hours: noteM3.hours,
            withOutFF: noteM3.with_out_ff,
          })) || []
        }
      >
        <Table.Column>
          <Table.HeaderCell>Amount</Table.HeaderCell>
          <Table.Cell dataKey="amount" />
        </Table.Column>
        <Table.Column>
          <Table.HeaderCell>Executor</Table.HeaderCell>
          <Table.Cell dataKey="executor" />
        </Table.Column>
        <Table.Column>
          <Table.HeaderCell>Hours</Table.HeaderCell>
          <Table.Cell dataKey="hours" />
        </Table.Column>
        <Table.Column>
          <Table.HeaderCell>Wiht out FF</Table.HeaderCell>
          <Table.Cell dataKey="withOutFF" />
        </Table.Column>
      </Table>
    </>
  )
}

export default TestPage
