import * as React from 'react'
import { shallow } from 'enzyme'
import TableRow from './TableRow'
import { ITableRow } from './types/table'

function setup(props: ITableRow) {
  const component = shallow(
    <TableRow id={ props.id } mode={ props.mode }/>
  )

  return {
    component
  }
}

describe('TableRow component', () => {
  it('should render "Row"', () => {
    const props: ITableRow = {
      id: 'id',
      mode: 'tiles'
    }

    const { component } = setup(props)

    expect(component.text()).toBe('Row')
  })

  it('should have the class `.table__content__row--tile` if tile mode', () => {
    const props: ITableRow = {
      id: 'id',
      mode: 'tiles'
    }

    const { component } = setup(props)

    expect(component.find('.table__content__row--tile').length).toBe(1)
  })
})
