import React, { ReactElement, useState } from 'react'
import Sidebar from "../components/sidebar"
import Table from '../components/table'
import { Column } from 'react-table'

const products = () => {
  
  interface ColumnType{
    photo: string,
    name: string,
    price: number,
    stock: number, 
    action: ReactElement,
  }

  const columns: Column<ColumnType>[]=[
    {
      Header: "Photo", accessor: "photo",
    },
    {
      Header: "Name", accessor: "name",
    },
    {
      Header: "Price", accessor: "price",
    },
    {
      Header: "Stock", accessor: "stock",
    },
    {
      Header: "Action", accessor: "action",
    },
]

  const arr: ColumnType[] = []
  const [data] = useState<ColumnType[]>(arr)

  return (
    <div className='admin-container'>
      <Sidebar/>
      <main>
        <Table columns={columns} data={data} containerClassname='dashboard-product-box' heading='Products'/>
      </main>
    </div>
  )
}

export default products