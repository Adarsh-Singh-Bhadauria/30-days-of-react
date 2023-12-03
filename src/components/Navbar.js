import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useSelector } from "react-redux";

const Navbar = (props) => {

  const amount= useSelector((store) => store.cart.amount)

  return (
    <>
    <div className='flex justify-between space-x-8 dark:bg-slate-900 dark:text-white bg-slate-100 rounded-md py-1 m-4'>
      <div className='text-2xl font-extrabold px-2'>REACT</div>
        <ul className='flex space-x-8 text-lg font-semibold'>
          <Link to="/" className='hover:bg-red-200 px-2 rounded-sm'>HOME</Link>
          <Link to="/about" className='hover:bg-red-200 px-2 rounded-sm'>ABOUT</Link>
          <Link to="/products" className='hover:bg-red-200 px-2 rounded-sm'>PRODUCTS</Link>
          <Link to="/todo" className='hover:bg-red-200 px-2 rounded-sm'>TODO LIST</Link>
          <Link to="/users" className='hover:bg-red-200 px-2 rounded-sm'>USERS</Link>
          <Link to="/login" className='hover:bg-red-200 px-2 rounded-sm'>LOGIN</Link>
          <Link to="/cartcontainer" className='hover:bg-red-200 px-2 rounded-sm'>CART</Link>
        </ul>
        <div className='flex'>
            <AiOutlineShoppingCart className='text-2xl'/>    
            <p>{amount}</p>
          </div>
        <button onClick={props.toggleTheme} className='font-medium bg-slate-900 text-white px-2 rounded-md'>Dark Mode</button>
    </div>
    </>
  )
}

export default Navbar