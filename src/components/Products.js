import React from 'react'
import {products_data} from '../data/data';

const Products = () => {
    return (
        <div className='grid grid-cols-4 gap-6 pt-4 mb-4 mx-2'>
        {products_data.map((item) => (
          <div
            key={item.id}
            className='border shadow-lg rounded-lg'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4 dark:text-white'>
              <p className='font-bold'>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      )
}

export default Products