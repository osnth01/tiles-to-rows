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
  it('should say "Hello, World!"', () => {
    const { component } = setup()

    expect(component.text()).toContain("Hello, World!")
  })
})