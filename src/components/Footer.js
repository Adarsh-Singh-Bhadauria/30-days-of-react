import React from 'react'
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center py-4 bg-slate-200 dark:bg-slate-900'>
        <div className='flex space-x-4 text-3xl my-2 dark:text-white'>
            <AiFillFacebook/>
            <AiFillLinkedin/>
        </div>
        <div className='flex flex-col text-center dark:text-white'>
            <p>Learn • Code • Apply</p>
            <p>Terms of use • Privacy Policy</p>
            <p>© 2023 Adarsh Singh Bhadauria</p>
        </div>
    </div>
    </>
  )
}

export default Footer