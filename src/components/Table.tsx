import * as React from 'react'

export interface TableProps {
  headerTitle: string
}

const Table: React.SFC<TableProps> = (props) => <h2>{ props.headerTitle }</h2>

export default Table
