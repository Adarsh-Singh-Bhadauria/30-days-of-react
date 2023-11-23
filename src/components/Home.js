import React from 'react'
import Header from './Header'

const Home = () => {
  return (
    <div className='h-[100vh]'>
      <Header/>
      <div className='m-4 mt-8 p-2 bg-blue-100 w-fit rounded-md'>
        Hello, This project will show my development skills in React throughout this 30 day journey.
      </div>
    </div>
  )
}

export default Home