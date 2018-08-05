import * as React from 'react'
import './App.css'

import Table from './Table'

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Table headerTitle={ "Demo Table" } />
      </div>
    )
  }
}

export default App