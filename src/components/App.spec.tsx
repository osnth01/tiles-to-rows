import * as React from 'react'
import App, { TableMode } from './App'
import { shallow } from 'enzyme'
import { ITableRow } from './types/table'

function setup() {
  const component = shallow(<App />)
  const addRowButton = component.find('.add-row-button')
  const tilesModeButton = component.find('.tiles-mode-button')
  const rowsModeButton = component.find('.rows-mode-button')

  return {
    component,
    addRowButton,
    tilesModeButton,
    rowsModeButton
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

  it('should switch the tableMode to tiles when tiles button is clicked', () => {
    const { component, tilesModeButton } = setup()

    tilesModeButton.simulate('click')

    expect(component.state('tableMode')).toBe(TableMode.tiles)
  })

  it('should switch the tableMode to rows when rows button is clicked', () => {
    const { component, rowsModeButton } = setup()

    rowsModeButton.simulate('click')

    expect(component.state('tableMode')).toBe(TableMode.rows)
  })
})
