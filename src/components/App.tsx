import * as React from 'react'
import * as uuidv1 from 'uuid/v1'
import './App.css'

import Table from './Table'
import { TableRow } from './types/table'

export interface AppProps {
}

export interface AppState {
  rows: TableRow[]
}

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props)

    this.state = {
      rows: []
    }

    this.addRow = this.addRow.bind(this)
  }

  public render() {
    return (
      <div className="app-container">
        <h2 className="text-center">Tiles to Rows Demo</h2>
        <button
          className="add-row-button"
          onClick={ this.addRow }
        >
          Add row
        </button>
        <Table
          headerTitle={ "My Cool Table" }
          rows={ this.state.rows }
        />
      </div>
    )
  }

  private addRow() {
    this.setState({
      rows: [
        ...this.state.rows,
        {
          id: uuidv1()
        }
      ]
    })
  }
}

export default App