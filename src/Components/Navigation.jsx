import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className='primary-nav'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/product"}>Product</NavLink>
    </nav>
  )
}
