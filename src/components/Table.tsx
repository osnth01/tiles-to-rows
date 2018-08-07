import * as React from 'react'
import './Table.css'
import { TableProps, TableRow } from './types/table'

const Table: React.SFC<TableProps> = (props) => (
  <div className="table">
    <div className="table__header">
      <h3>{ props.headerTitle }</h3>
    </div>
    <div className="table__content">
      {
        props.rows.map((row: TableRow) => {
          return (
            <div
              key={ row.id }
              className="table__content__row" >
              Row
            </div>
          )
        })
      }
    </div>
  </div>
)

export default Table
