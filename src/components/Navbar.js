import React from 'react'

const Navbar = () => {
  return (
    <ul className='flex space-x-8 text-xl font-semibold m-4'>
        <li className='hover:bg-red-200 px-2 rounded-sm'>HOME</li>
        <li className='hover:bg-red-200 px-2 rounded-sm'>ABOUT</li>
    </ul>
  )
}

export default Navbar