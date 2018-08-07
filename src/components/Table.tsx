import * as React from 'react'
import './Table.css'

export interface TableProps {
  headerTitle: string
}

const Table: React.SFC<TableProps> = (props) => (
  <div className="table">
    <div className="table__header">
      <h3>{ props.headerTitle }</h3>
    </div>
  </div>
)

export default Table
