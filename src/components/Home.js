import React from 'react'
import Header from './Header'
import Product from './Product'

const Home = () => {
  return (
    <>
    <div>
      <div>
        <Header/>
        <div className='m-4 mt-8 p-2 bg-blue-100 w-fit rounded-md'>
            Hello, This project will show my development skills in React throughout this 30 day journey.
        </div>
      </div>
      <div className='flex space-x-4 mx-4 my-8 justify-center'>
        <Product image='Iphone.jpg' title="Iphone" description=" Available on Amazon" />
        <Product image='Ipad.jpg' title="Ipad" description="Available on Flipkart" />
        <Product image='tablet.jpg' title="Tablet" description="Available on any retail store near you" />
        <Product image='earbuds.jpg' title="Earbuds" description="Available on Amazon" />
      </div>
    </div>
    </>
  )
}

export default Home