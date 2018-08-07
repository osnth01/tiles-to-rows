import * as React from 'react'
import './App.css'

import Table from './Table'

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <h2 className="text-center">Tiles to Rows Demo</h2>
        <Table headerTitle={ "My Cool Table" } />
      </div>
    )
  }
}

export default App