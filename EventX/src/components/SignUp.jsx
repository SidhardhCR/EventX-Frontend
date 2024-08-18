import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

import { useState } from 'react'
import axios from 'axios'


function SignUp() {
  const navigate = useNavigate();
  const loginWithGoogle =()=>{
    window.open('https://event-x-backend.vercel.app/auth/google/callback','_self')
}

  const [data, setData]= useState({
    name:'',
    email:'',
    password:''
  });

  const handleInput = (event)=>{
    setData({...data , [event.target.name]:event.target.value})
  };

  function handleSubmit(event){
      event.preventDefault()
      axios.post('https://event-x-backend.vercel.app/users/signup',{data}).then((response)=>{
          console.log(response)
          if (response.data.message) {
            navigate('/');
          }
      }).catch((err)=>{
        console.log(err)
      })
  }

  return (
    <div className="bg-white h-screen w-screen flex flex-col md:flex-row">
    <div className="bg-[#F8F8FA] w-full md:w-3/5 h-full md:h-screen flex items-center justify-center">
      <div className="m-8 md:m-12 w-full">
        <h1 className="text-3xl md:text-5xl inter font-bold text-center">Event<span className="text-[#0062E0]">X</span></h1>
        <h2 className="text-xl md:text-3xl inter font-[600] text-center p-2 md:p-5">Manage Events with <span className="text-[#0062E0] font-[700]">Ease</span></h2>
        <h5 className="inter font-[500] text-[#9B9C9E] text-center pt-6 md:pt-12">Sign up in to EventX</h5>
        <div className="pt-6 md:pt-10 mx-4 md:mx-10">
          <form onSubmit={handleSubmit} >
          <div className="flex flex-col pt-4 md:pt-8">
              <label className="inter" htmlFor="name">Name</label>
              <input onChange={handleInput} name='name' className="bg-white p-2 mt-2 md:mt-5 border rounded" type="text" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col pt-4 md:pt-8">
              <label className="inter" htmlFor="email">Email</label>
              <input onChange={handleInput} name='email' className="bg-white p-2 mt-2 md:mt-5 border rounded" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col pt-4 md:pt-8">
              <div className="flex justify-between inter">
                <label className="inter" htmlFor="password">Password</label>
                
              </div>
              <input onChange={handleInput} name='password' className="bg-white p-2 mt-2 md:mt-5 border rounded" type="password" placeholder="Enter your password" />
            </div>
            <p className='float-end pt-2 p-2 text-[#7E7E7E] opacity-65 text-xs sm:text-sm md:text-base'>
Already have an acoount? <Link to='/login' className='text-[#0062E0]'>Log In</Link>
</p>

            <input className="bg-[#1EA1F2] items-center w-full md:w-32 text-white p-2 border rounded-md text-center mt-6 md:mt-10 mx-auto block cursor-pointer" type="submit" value=" Sign Up" />
          </form>
        
          <button className="bg-white mx-auto block border p-2 pl-8 pr-8 md:pl-20 md:pr-20 rounded mt-3 md:mt-5" onClick={loginWithGoogle}>
            <div className="flex gap-2 inter font-[400] items-center justify-center">
              <img src="/Logogoogle.png" alt="Google logo" className="w-5 h-5" />
              Sign up with Google
            </div>
          </button>
        </div>
      </div>
    </div>
    <div className="hidden md:block bg-[url('/login_img.png')] w-full md:w-2/5 h-64 md:h-screen bg-cover "></div>
  </div>
      
  )
}

export default SignUp