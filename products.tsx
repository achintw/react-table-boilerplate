import React, { ReactElement, useState } from 'react'
import Sidebar from "../components/sidebar"
import Table from '../components/table'
import { Column } from 'react-table'
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const products = () => {

  const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

  const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

  interface ColumnType{
    photo: ReactElement,
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

  const arr: ColumnType[] = [
    {
      photo: <img src={img} alt="Shoes" />,
      name: "Puma Shoes Air Jordan Cook Nigga 2023",
      price: 19000,
      stock: 3,
      action: <Link to="/admin/product/sajknaskd">Manage</Link>,
    },
  
    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 230000,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 230000,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 230000,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 230000,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 230000,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 230000,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 230000,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 230000,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 230000,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 230000,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 230000,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
  ]
  const [data] = useState<ColumnType[]>(arr)

  return (
    <div className='admin-container'>
      <Sidebar/>
      <main>
        <Table columns={columns} data={data} containerClassname='dashboard-product-box' heading='Products' showPagination={true}/>
        <Link to="/admin/product/new" className='create-product-btn'><FaPlus/></Link>
      </main>
    </div>
  )
}

export default products