import * as React from 'react'
import Table from './Table'
import { ITableProps } from './Table'
import { ITableRow, TableMode } from './types/table'
import { render } from 'enzyme'

function setup(props: ITableProps) {
  const component = render(<Table { ...props } />)
  const header = component.find('h3')
  const rows = component.find('.table__content__row')

  return {
    component,
    header,
    rows
  }
}

describe('Table component', () => {
  let headerTitle: string
  let tableProps: ITableProps
  let tableRows: ITableRow[]
  let mode: TableMode

  beforeEach(() => {
    headerTitle = "My Table"
    tableRows = [
      {
        id: '1'
      },
      {
        id: '2'
      }
    ]
    mode = TableMode.rows
    tableProps = {
      headerTitle,
      rows: tableRows,
      tableMode: mode
    }
  })

  it('should render the given header title', () => {
    const { header } = setup(tableProps)

    expect(header.text()).toBe(headerTitle)
  })

  it('should render the given number of rows', () => {
    const { rows } = setup(tableProps)

    expect(rows.length).toBe(tableRows.length)
  })
})
