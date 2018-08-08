import * as React from 'react'
import './TableRow.css'
import { ITableRow } from './types/table'

const TableRow: React.SFC<ITableRow> = (props) => {
  let rowStyle = "table__content__row"
  if (props.mode === "tiles") {
    rowStyle += " table__content__row--tile"
  }
  return (
    <div className={ rowStyle } >
      Row
    </div>
  )
}

export default TableRow
