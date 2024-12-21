import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')
  const onSubmitHandler = async(event)=>{
    event.preventDefault();
  }
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 mt-14 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-3 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input type='text' placeholder='Name' className='w-full px-3 border border-gray-800 outline-none' required={true} />}
      <input type='email' placeholder='Email' className='w-full px-3 border border-gray-800 outline-none' required={true} />
      <input type='password' placeholder='Password' className='w-full px-3 border border-gray-800 outline-none' required={true} />
      <div className='w-full flex justify-between'>
        <p className='cursor-pointer'>Forgot Your Password ?</p>
        {
          currentState === 'Login'
            ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login