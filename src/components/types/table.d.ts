export interface TableRow {
  id: string
}

export interface TableProps {
  headerTitle: string
  rows: TableRow[]
}