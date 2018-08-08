import * as React from 'react'
import { shallow } from 'enzyme'

import StatusBoard from './StatusBoard'
import { IStatusBoardProps } from './StatusBoard'
import { ITableRow } from './types/table'
import { TableMode } from './App';

function setup(props: IStatusBoardProps) {
  const component = shallow(<StatusBoard rows={ props.rows } tableMode={ props.tableMode }/>)
  const count = component.find('.status-board__count')
  const rows = component.find('.status-board__table-state__row')
  const tableMode = component.find('.status-board__table-mode')

  return {
    component,
    count,
    rows,
    tableMode
  }
}

describe('StatusBoard component', () => {
  let tableRows: ITableRow[]
  let tableModeStatus: string
  let props: IStatusBoardProps

  beforeEach(() => {
    tableRows = [
      {
        id: 'id'
      }
    ]

    tableModeStatus = 'rows'

    props = {
      rows: tableRows,
      tableMode: tableModeStatus
    }
  })

  it('should show the number of rows', () => {
    const { count } = setup(props)

    expect(count.text()).toContain('1')
  })

  it('should show the rows data', () => {
    const { rows } = setup(props)

    const firstRow = rows.first()

    expect(firstRow.text()).toContain(tableRows[0].id)
  })

  it('should show the table mode', () => {
    const { tableMode } = setup(props)

    expect(tableMode.text()).toContain(tableModeStatus)
  })
})