import * as React from 'react'
import './Table.css'
import { ITableProps, ITableRow } from './types/table'
import TableRow from './TableRow'

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
              id={ row.id }
              mode={ row.mode }
              key={ row.id }
            />
          )
        })
      }
    </div>
  </div>
)

export default Table
