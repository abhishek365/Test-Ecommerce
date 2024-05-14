import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Users = () => {
  return (
    <>
        <Link to={"user-details/1"}> User 1</Link>
        <Link to={"user-details/2"}> User 2</Link>
        <Link to={"user-details/3"}> User 3</Link>
        <Outlet />
    </>
  )
}
