import React from 'react'
import img2 from '../assets/image2.jpeg'
const Login3 = () => {
  return (
    <div className=' h-screen w-full flex'>
        <div className=' grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className=' w-full h-[550px] hidden md:block'>
                <img className='h-full w-full ' src={img2} alt="" />
            </div>
            <div className=' flex flex-col p-4 justify-around'>
                <form >
                    <h2 className='text-4xl font-bold text-center mb-8'>.Brand</h2>
                    <div >
                        <input className='w-full border p-2 mr-2' type="text" placeholder='Username' />
                        <input className='w-full mt-2 border p-2' type="password" placeholder='Password' />
                    </div>
                    <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Sign Up</button>
                    <p className='text-center'>Forgot Username Or Password</p>
                                       
                </form>
                <p className='text-center'>Sign Up</p> 
            </div>
        </div>
    </div>
  )
}

export default Login3