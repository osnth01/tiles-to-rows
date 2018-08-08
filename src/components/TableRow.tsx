import * as React from 'react'
import './TableRow.css'
import { TableMode } from './types/table'

export interface ITableRowProps {
  mode: TableMode
}

const TableRow: React.SFC<ITableRowProps> = (props) => {
  let rowStyle = "table__content__row"
  if (props.mode === TableMode.tiles) {
    rowStyle += " table__content__row--tile"
  }
  return (
    <div className={ rowStyle } >
      Row
    </div>
  )
}

export default TableRow
