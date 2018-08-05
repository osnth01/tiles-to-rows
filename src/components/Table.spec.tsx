import * as React from 'react'
import Table from './Table'
import { TableProps } from './Table'
import { shallow } from 'enzyme'

function setup(props: TableProps) {
  const component = shallow(<Table headerTitle={props.headerTitle} />)
  const header = component.find('h2')

  return {
    component,
    header
  }
}

describe('Table component', () => {
  it('should render the given header title', () => {
    const headerTitle = "My Table"

    const tableProps: TableProps = {
      headerTitle
    }

    const { header } = setup(tableProps)

    expect(header.text()).toBe(headerTitle)
  })
})