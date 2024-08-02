import React from 'react';

import { Link } from 'react-router-dom';

function LoginPage() {

  const loginWithGoogle =()=>{
      window.open('http://localhost:3000/auth/google/callback','_self')
  }
  return (
    <div className="bg-white h-screen w-screen flex flex-col md:flex-row">
      <div className="bg-[#F8F8FA] w-full md:w-3/5 h-full md:h-screen flex items-center justify-center">
        <div className="m-8 md:m-12 w-full">
          <h1 className="text-3xl md:text-5xl inter font-bold text-center">Event<span className="text-[#0062E0]">X</span></h1>
          <h2 className="text-xl md:text-3xl inter font-[600] text-center p-2 md:p-5">Manage Events with <span className="text-[#0062E0] font-[700]">Ease</span></h2>
          <h5 className="inter font-[500] text-[#9B9C9E] text-center pt-6 md:pt-12">Log in to EventX</h5>
          <div className="pt-6 md:pt-10 mx-4 md:mx-10">
            <form action="">
              <div className="flex flex-col">
                <label className="inter" htmlFor="email">Email</label>
                <input className="bg-white p-2 mt-2 md:mt-5 border rounded" type="email" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col pt-4 md:pt-8">
                <div className="flex justify-between inter">
                  <label className="inter" htmlFor="password">Password</label>
                  <p className="text-[#7E7E7E] opacity-65 text-sm md:text-base">Forgot your password?</p>
                </div>
                <input className="bg-white p-2 mt-2 md:mt-5 border rounded" type="password" placeholder="Enter your password" />
              </div>
              <p className='float-end pt-2 p-2 text-[#7E7E7E] opacity-65 text-xs sm:text-sm md:text-base'>
  Not registered? <Link to='/signup' className='text-[#0062E0]'>Create an account</Link>
</p>

              <input className="bg-[#1EA1F2] items-center w-full md:w-32 text-white p-2 border rounded-md text-center mt-6 md:mt-10 mx-auto block cursor-pointer" type="submit" value="Log In" />
            </form>
            <p className="inter text-center text-[#7E7E7E] opacity-65 pt-4 md:pt-6">Or</p>
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
  );
}

export default LoginPage;
