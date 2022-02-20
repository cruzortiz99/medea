import React, { ReactNode } from "react"
import { Container, Table } from "rsuite"
import { RowDataType } from "../../../models/index"
import styles from "./AppTable.module.css"

export type AppTableColumnGroup = {
  headers?: string
  alingHeader?: "left" | "center" | "right"
  columns: AppTableColumn[]
}

export type AppTableColumn = {
  headerCell: string
  dataKey: string
  flexGrowColumn?: number
  alingColumn?: "left" | "center" | "right"
  minWidthColumn?: number
}

export type AppTableProps = {
  dataTable: RowDataType[]
  height?: number
  heightHeaderCell?: number
  columns: AppTableColumn[]
  columnGroups?: AppTableColumnGroup[]
  extraColumns?: AppTableColumn[]
  isLoading?: boolean
}

function AppTable(props: AppTableProps): JSX.Element {
  return (
    <Container>
      <Table
        bordered
        cellBordered
        showHeader
        wordWrap
        autoHeight
        data={props.dataTable}
        height={props.height}
        headerHeight={props.heightHeaderCell}
        className={styles.borderTable}
        loading={props.isLoading}
      >
        {props.columns && props.columns.length > 0
          ? props.columns.map((keyName, key) => (
              <Table.Column
                key={key}
                flexGrow={keyName.flexGrowColumn}
                minWidth={keyName.minWidthColumn}
                align={keyName.alingColumn}
              >
                <Table.HeaderCell className={styles.headerColor}>
                  {typeof keyName === "string" ? keyName : keyName.headerCell}
                </Table.HeaderCell>
                <Table.Cell dataKey={keyName.dataKey} />
              </Table.Column>
            ))
          : undefined}
        {props.columnGroups?.map((keyName, key) => (
          <Table.ColumnGroup
            key={key}
            header={keyName.headers}
            align={keyName.alingHeader}
          >
            {keyName.columns && keyName.columns.length > 0
              ? keyName.columns.map((keyName, key) => (
                  <Table.Column
                    key={key}
                    flexGrow={keyName.flexGrowColumn}
                    minWidth={keyName.minWidthColumn}
                    align={keyName.alingColumn}
                  >
                    <Table.HeaderCell className={styles.headerColor}>
                      {typeof keyName === "string"
                        ? keyName
                        : keyName.headerCell}
                    </Table.HeaderCell>
                    <Table.Cell dataKey={keyName.dataKey} />
                  </Table.Column>
                ))
              : undefined}
          </Table.ColumnGroup>
        ))}
        {props.extraColumns && props.extraColumns.length > 0
          ? props.extraColumns.map((keyName, key) => (
              <Table.Column
                key={key}
                flexGrow={keyName.flexGrowColumn}
                minWidth={keyName.minWidthColumn}
                align={keyName.alingColumn}
              >
                <Table.HeaderCell className={styles.headerColor}>
                  {typeof keyName === "string" ? keyName : keyName.headerCell}
                </Table.HeaderCell>
                <Table.Cell dataKey={keyName.dataKey} />
              </Table.Column>
            ))
          : undefined}
      </Table>
    </Container>
  )
}

export default AppTable
