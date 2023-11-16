import React from 'react'
import {useForm} from "react-hook-form";

const Login = () => {
    const{
        register,
        handleSubmit,
        formState: {errors}} = useForm();

        const onSubmit = (data) => {
            console.log(data);
        };
  return (
    <div className='flex justify-center my-[90px]'>
        <form className='w-1/4 py-4 rounded-xl px-8 bg-slate-400 space-y-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Username</label>
            <input className='px-2 rounded-lg' type='text' name='username' placeholder='John' {...register("username", {required: true})} />
        </div>
        <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Email</label>
            <input className='px-2 rounded-lg' type='email' name='email' placeholder='john@gmail.com' {...register("email", {required: true, pattern: {value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Email is not valid"}})} />
            {errors.email && (<p className='text-red-700 font-semibold'>{errors.email.message}</p>)}
        </div>
        <div className='flex flex-col'>
            <label className='text-lg font-semibold'>Password</label>
            <input className='px-2 rounded-lg' type='password' name='password' placeholder='**********' {...register("password", {required: true, minLength: {value: 10, message: "Password must be atleast 10 characters long"}})} />
            {errors.password && <p className='text-red-700 font-semibold'>{errors.password.message}</p>}
        </div>
        <div className='flex justify-center'>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg my-4' type='submit'>SUBMIT</button>
        </div>
        </form>
    </div>
  )
}

export default Login