import * as React from 'react'
import './Table.css'
import { ITableRow } from './types/table'
import TableRow from './TableRow'
import { TableMode } from './App'

export interface ITableProps {
  headerTitle: string
  rows: ITableRow[],
  tableMode: TableMode
}

const Table: React.SFC<ITableProps> = (props) => (
  <div className="table">
    <div className="table__header">
      <h3>{ props.headerTitle }</h3>
    </div>
    <div className="table__content">
      {
        props.rows.map((row: ITableRow) => {
          return (
            <TableRow
              key={ row.id }
              mode={ props.tableMode }
            />
          )
        })
      }
    </div>
  </div>
)

export default Table
