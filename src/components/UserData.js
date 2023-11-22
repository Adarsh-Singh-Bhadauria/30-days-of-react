import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = () => {
    const [posts, setPosts]= useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data);
        })
        .catch(err =>{
            console.log(err);
        })
    }, [])

  return (
    <>
        <p className='text-4xl font-extrabold my-8 text-center dark:text-white'>Random User Data</p>
        <ul className='flex flex-wrap space-x-4 space-y-4 justify-center my-8'>
            {posts.map(post => (
                <div className='flex flex-col text-center w-1/5 p-4 bg-red-200 rounded-lg'>
                    <li key={post.id} className='text-xl font-bold mb-4' >{post.title}</li>
                    <li>{post.body}</li>
                </div>
            ))}
        </ul>
    </>
  )
}

export default UserData