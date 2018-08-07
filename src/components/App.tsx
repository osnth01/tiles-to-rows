import * as React from 'react'
import './App.css'

import Table from './Table'
import { TableRow } from './types/table'

export interface AppProps {
}

export interface AppState {
  rows: TableRow[]
}

class App extends React.Component<AppProps, any> {
  public constructor(props: AppProps) {
    super(props)

    this.state = {
      rows: []
    }
  }

  public render() {
    return (
      <div className="app-container">
        <h2 className="text-center">Tiles to Rows Demo</h2>
        <Table
          headerTitle={ "My Cool Table" }
          rows={ this.state.rows }
        />
      </div>
    )
  }
}

export default App