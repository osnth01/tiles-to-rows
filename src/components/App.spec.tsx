import * as React from 'react'
import App from './App'
import { shallow } from 'enzyme'

function setup() {
  const component = shallow(<App />)

  return {
    component
  }
}

describe('App component', () => {
  it('should say "Tiles to Rows Demo"', () => {
    const { component } = setup()

    expect(component.text()).toContain("Tiles to Rows Demo")
  })
})
