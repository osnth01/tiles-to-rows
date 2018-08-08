import * as React from 'react'
import * as uuidv1 from 'uuid/v1'
import './App.css'

import Table from './Table'
import { ITableRow } from './types/table'
import StatusBoard from './StatusBoard'

export enum TableMode {
  rows = 'rows',
  tiles = 'tiles'
}

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
    this.switchMode = this.switchMode.bind(this)
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
        <button
          className="rows-mode-button"
          onClick={ () => { this.switchMode(TableMode.rows) } }
          disabled={ this.state.tableMode === TableMode.rows }
        >
          Rows mode
        </button>
        <button
          className="tiles-mode-button"
          onClick={ () => { this.switchMode(TableMode.tiles) } }
          disabled={ this.state.tableMode === TableMode.tiles }
        >
          Tiles mode
        </button>
        <Table
          headerTitle={ "My Cool Table" }
          rows={ this.state.rows }
          tableMode={ this.state.tableMode }
        />
        <StatusBoard
          rows={ this.state.rows }
          tableMode={ this.state.tableMode.toString() }
        />
      </div>
    )
  }

  public componentDidMount() {
    this.addRow()
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

  private switchMode(mode: TableMode) {
    this.setState({
      tableMode: mode
    })
  }
}

export default App
