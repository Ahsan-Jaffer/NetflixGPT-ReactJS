import React, { useRef } from 'react'
import Header from './Header'
import { useLinkClickHandler } from 'react-router-dom';

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

  }
  return (
    <div className=''>
      <Header />
      <div className='absolute'>
      {/* bg-img */}
      </div>

      <form className='w-3/12 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-12 text-white bg-black rounded-lg placeholder:text-black'>
        <input 
        className='px-4 py-3 mt-4 w-full rounded-md border-none text-black bg-gray-400 placeholder:text-black'
        ref={email}
        type="text" 
        placeholder='Enter your Email'/>

        <input 
        className='px-4 py-3 mt-4 w-full rounded-md border-none text-black  bg-gray-400 placeholder:text-black'
        ref={password}
        type="password" 
        placeholder='Enter your Password'/>
        <button onClick={submitHandler} className='px-3 py-2 w-full mt-4 font-semibold bg-red-500 rounded-md'>Sign in</button>
      </form>
    </div>
  )
}

export default Login