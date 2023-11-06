import React from 'react'
import {useState} from 'react';

const Counter = () => {

    const [count, setCount]= useState(0);
    function increment(){
      setCount(prevCount => prevCount +1);
    };
  
    function decrement(){
      setCount(prevCount => prevCount-1);
    };

  return (
    <>
        <div className='flex space-x-4 justify-center items-center'>
            <button className='text-xl font-bold px-2 bg-slate-400 rounded-md' onClick={decrement}>-</button>
            <span>{count}</span>
            <button className='text-xl font-bold px-1 bg-slate-400 rounded-md' onClick={increment}>+</button>
        </div>
    </>
  )
}

export default Counter