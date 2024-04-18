import React from 'react'
import Table from './table'
import { Column } from 'react-table'

interface ColumnType {

  id: string, 
  quantity: number,
  discount: number,
  amount: number,
  status: string,
}

const columns: Column<ColumnType>[] = [
    {
    Header: "ID",  // what will be shown
    accessor: "id" // to access anything related to id
    },
    {
    Header: "Quantity",
    accessor: "quantity"
    },
    {
    Header: "Discount",
    accessor: "discount"
    },
    {
    Header: "Amount",
    accessor: "amount"
    },
    {
    Header: "Status",
    accessor: "status"
    },
]

interface dataType{
  data: ColumnType[]
}

const DashboardTable = ({data}: dataType) => {
  return (
    <Table
      columns={columns}
      data={data}
      containerClassname="transactionBox"
      heading="Top Transactions"
    />
  )
}

export default DashboardTable