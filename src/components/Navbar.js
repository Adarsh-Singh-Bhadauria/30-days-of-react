import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <ul className='flex space-x-8 text-xl font-semibold m-4 bg-slate-100 rounded-md py-1'>
        <Link to="/" className='hover:bg-red-200 px-2 rounded-sm'>HOME</Link>
        <Link to="/about" className='hover:bg-red-200 px-2 rounded-sm'>ABOUT</Link>
    </ul>
  )
}

export default Navbar