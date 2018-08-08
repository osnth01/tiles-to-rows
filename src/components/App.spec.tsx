import * as React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import { ITableRow } from './types/table'

function setup() {
  const component = shallow(<App />)
  const addRowButton = component.find('.add-row-button')

  return {
    component,
    addRowButton
  }
}

describe('App component', () => {
  it('should say "Tiles to Rows Demo"', () => {
    const { component } = setup()

    expect(component.text()).toContain("Tiles to Rows Demo")
  })

  it('should increase the number of rows when addRowButton is clicked', () => {
    const { component, addRowButton } = setup()

    addRowButton.simulate('click')

    const rows: ITableRow[] = component.state('rows')

    expect(rows.length).toBe(1)
  })
})
