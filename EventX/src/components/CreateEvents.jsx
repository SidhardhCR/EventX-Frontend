import React from 'react'
import { Link } from 'react-router-dom'

function CreateEvents() {
  return (
    <div className='bg-[#F8F8FA] m-2'>
        <div className='flex  flex-row justify-between items-center ml-6 mr-4'>
      <h1 className="text-xl m-4 md:m-10 md:ml-16 md:text-4xl inter font-bold">
        Event<span className="text-[#0062E0]">X</span>
      </h1>
      <div>
        <Link to='/create_events'><button className='bg-[#F8F8FA] inter my-2 md:m-6 w-20 md:w-36 mr-4 md:mr-10 text-black p-4   text-center cursor-pointer'>
          Login
        </button></Link>
        <Link to='/create_events'><button className=' bg-[#1EA1F2]  inter my-2 md:m-6 w-20 md:w-36 mr-4 md:mr-16 text-white p-4 border rounded-md text-center cursor-pointer'>
          SignUp
        </button></Link>
      </div>
    </div>

    <section className='mt-5 md:mt-2'>
    <form action="">
        <legend className='inter md:text-4xl text-center font-bold'>Create Event</legend>
        
        <div className='m-5 md:ml-60 md:mr-24 inter'>
            <div className='flex flex-col gap-2'>
                <label htmlFor="name">Event Title</label>
                <input className='ml-0 md:ml-3 p-2' type="text" name="name" id="name" placeholder="Enter your event title" />
            </div> 

            <div className='flex flex-col gap-2 pt-10'>
                <label htmlFor="name">Event Venue</label>
                <input className='ml-0 md:ml-3 p-2' type="text" name="name" id="name" placeholder="Enter your event venue" />
            </div> 

            <div className='flex flex-col md:flex-row gap-x-6'>
                <div className='flex flex-col gap-2 pt-10'>
                    <label htmlFor="name">Start time</label>
                    <input className='ml-0 md:ml-3 p-2 w-full md:w-96' type="time" name="name" id="name" placeholder="Enter your event venue" />
                </div> 

                <div className='flex flex-col gap-2 pt-10'>
                    <label htmlFor="name">End time</label>
                    <input className='ml-0 md:ml-3 p-2 w-full md:w-96' type="time" name="name" id="name" placeholder="Enter your event venue" />
                </div> 
            </div>

            <div className='flex flex-col md:flex-row gap-x-6'>
                <div className='flex flex-col gap-2 pt-10'>
                    <label htmlFor="name">Start date</label>
                    <input className='ml-0 md:ml-3 p-2 w-full md:w-96' type="date" name="name" id="name" placeholder="Enter your event venue" />
                </div> 

                <div className='flex flex-col gap-2 pt-10'>
                    <label htmlFor="name">End date</label>
                    <input className='ml-0 md:ml-3 p-2 w-full md:w-96' type="date" name="name" id="name" placeholder="Enter your event venue" />
                </div> 
            </div>
        </div>

        <legend className='inter md:text-4xl text-center font-bold mt-10'>Event Description</legend>
        
        <div className='m-2 md:ml-60 md:mr-24 inter'>
            <div className='flex flex-col gap-2 pt-10'>
                <label htmlFor="name">Event image</label>
                <input className='ml-0 md:ml-3 p-2 w-full md:w-auto' type="file" name="name" id="name" placeholder="Enter your event venue" />
            </div> 

            <div className='flex flex-col gap-2 pt-10'>
                <label htmlFor="name">Event description</label>
                <textarea className='ml-0 md:ml-3 p-2 h-44' name="description" id="description" placeholder="Type here..." />
            </div> 

            <input className="bg-[#1EA1F2] items-center w-full md:w-full text-white p-2 border rounded-md text-center mt-6 md:mt-10 mx-auto block cursor-pointer" type="submit" value="Create Event" />
        </div>
    </form>
</section>


    </div>
  )
}

export default CreateEvents