import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Product = () => {
  return (
    <>
        <nav> 
            <Link to={"old-product"}>Old Product</Link>
            <Link to={"new-product"}>New Product</Link>
        </nav>
        <Outlet />
    </>
  )
}
