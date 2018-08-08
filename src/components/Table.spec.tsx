import * as React from 'react'
import Table from './Table'
import { ITableProps, ITableRow } from './types/table'
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

  beforeEach(() => {
    headerTitle = "My Table"
    tableRows = [
      {
        id: '1',
        mode: 'tiles'
      },
      {
        id: '2',
        mode: 'tiles'
      },
    ]
    tableProps = {
      headerTitle,
      rows: tableRows
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