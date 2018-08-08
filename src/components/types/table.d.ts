export interface ITableRow {
  id: string
  mode: string
}

export interface ITableProps {
  headerTitle: string
  rows: ITableRow[]
}