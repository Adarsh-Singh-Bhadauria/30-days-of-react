import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex justify-between space-x-8 bg-slate-100 rounded-md py-1 m-4'>
      <div className='text-2xl font-extrabold px-2'>REACT</div>
        <ul className='flex space-x-8 text-lg font-semibold'>
          <Link to="/" className='hover:bg-red-200 px-2 rounded-sm'>HOME</Link>
          <Link to="/about" className='hover:bg-red-200 px-2 rounded-sm'>ABOUT</Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar