import * as React from 'react'
import * as uuidv1 from 'uuid/v1'
import './App.css'

import Table from './Table'
import { ITableRow, TableMode } from './types/table'

export interface AppProps {
}

export interface AppState {
  rows: ITableRow[]
  tableMode: TableMode
}

class App extends React.Component<AppProps, AppState> {
  public constructor(props: AppProps) {
    super(props)

    this.state = {
      rows: [],
      tableMode: TableMode.rows
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
          tableMode={ this.state.tableMode }
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
