import * as React from 'react'
import './StatusBoard.css'

import { ITableRow } from './types/table'

export interface IStatusBoardProps {
  rows: ITableRow[]
  tableMode: string
}

const StatusBoard: React.SFC<IStatusBoardProps> = (props) => (
  <div className="status-board">
    <div className="status-board__count">
      <h2>Number of Rows: { props.rows.length }</h2>
    </div>
    <div className="status-board__table-state">
      <h2>Table State:</h2>
      {
        props.rows.map((row: ITableRow) => {
          return (
            <div
              key={ row.id }
              className="status-board__table-state__row">
              id: { row.id }
            </div>
          )
        })
      }
    </div>
    <div className="status-board__table-mode">
      <h2>Table Mode: { props.tableMode }</h2>
    </div>
  </div>
)

export default StatusBoard