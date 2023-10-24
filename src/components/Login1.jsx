import React from 'react'
import img1 from '../assets/image1.webp'

const Login1 = () => {
  return (
    <div className=' grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={img1} alt="{img1}" />
      </div>
      
      <div className=' bg-gray-100 flex flex-col justify-center'>
        <form className='max-w-[400px] bg-white mx-auto w-full p-4 shadow-lg'>
          <h2 className='text-4xl font-bold text-center py-6'>.Brand</h2>
          <div className='flex flex-col py-2'>
            <label>Uersname</label>
            <input className='border p-2' type="text" />
          </div>
          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input className='border p-2' type="text" />
          </div>
          <button className='border w-full py-2 bg-indigo-600 hover:bg-indigo-500'>Sign In</button>
          <div className=' flex justify-between pt-3'>
            <p className=' flex items-center'><input className='mr-2' type="checkbox"/>Remember Me</p>
            <p>Create An Account</p>
          </div>
        </form>

      </div>    
    </div>
  )
}

export default Login1