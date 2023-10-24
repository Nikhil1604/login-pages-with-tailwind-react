import React from 'react'
import img2 from "../assets/image3.jpg"
import {AiFillFacebook} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
const Login2 = () => {
  return (
    <div className=' relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={img2} alt="img2" />
        
        
        <div className=' flex justify-center h-full items-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                <h2 className='text-4xl font-bold text-center py-4 '>.Brand</h2>
                <div className=' flex justify-between py-6'> 
                    <p className=' border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2'/> Facebook</p>
                    <p className=' border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
                </div>
                <div className=' flex flex-col mb-4'>
                    <label className='relative'>Username</label>
                    <input className='border relative bg-gray-100 p-2' type="text"/>
                </div>
                <div className=' flex flex-col'>
                    <label className='relative'>Password</label>
                    <input className='border relative bg-gray-100 p-2' type="password" />
                </div>
                <button className=' w-full py-3 mt-8 bg-indigo-600 relative hover:bg-indigo-500'>Sign In</button>
                <p className='flex text-center relative mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
                <p className='text-center mt-8 relative'>Not a Member? Sign Up</p>

            </form>
        </div>
    </div>
  )
}

export default Login2