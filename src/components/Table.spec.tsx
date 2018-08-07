import * as React from 'react'
import Table from './Table'
import { TableProps, TableRow } from './types/table'
import { shallow } from 'enzyme'

function setup(props: TableProps) {
  const component = shallow(<Table { ...props } />)
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
  let tableProps: TableProps
  let tableRows: TableRow[]

  beforeEach(() => {
    headerTitle = "My Table"
    tableRows = [
      {
        id: '1'
      },
      {
        id: '2'
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