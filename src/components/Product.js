import React from 'react'

const Product = (props) => {
  return (
    <div className='flex flex-col text-center space-y-2 items-center justify-center p-2 bg-green-100 rounded-md'>
      <img className='rounded-md w-48' src={props.image} alt='product' />
      <p className='font-bold'>{props.title}</p>
      <p>{props.description}</p>
    </div>
  )
}

export default Product