import * as React from 'react'
import { shallow } from 'enzyme'
import TableRow from './TableRow'
import { ITableRowProps } from './TableRow'
import { TableMode } from './types/table'

function setup(props: ITableRowProps) {
  const component = shallow(
    <TableRow mode={ props.mode }/>
  )

  return {
    component
  }
}

describe('TableRow component', () => {
  it('should render "Row"', () => {
    const props: ITableRowProps = {
      mode: TableMode.tiles
    }

    const { component } = setup(props)

    expect(component.text()).toBe('Row')
  })

  it('should have the class `.table__content__row--tile` if tile mode', () => {
    const props: ITableRowProps = {
      mode: TableMode.tiles
    }

    const { component } = setup(props)

    expect(component.find('.table__content__row--tile').length).toBe(1)
  })
})
