import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateEvents() {
  const [userdata, setUserdata] = useState(null); // Initialize userdata as null
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    event_name: '',
    event_venue: '',
    start_time: '',
    end_time: '',
    start_date: '',
    end_date: '',
    event_descp: ''
  });

  const getUser = async () => {
    try {
      const response = await axios.get('https://event-x-backend.vercel.app/login/success', { withCredentials: true });
      console.log('response', response);
      setUserdata(response.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === 'start_time' || name === 'end_time') {
      formattedValue = convertTo12HourFormat(value); // Convert to 12-hour format
    }

    setFormData({
      ...formData,
      [name]: formattedValue
    });
  };

  const convertTo12HourFormat = (time24) => {
    let [hours, minutes] = time24.split(':');
    const period = +hours >= 12 ? 'PM' : 'AM';
    hours = +hours % 12 || 12; // Convert "00" to "12" for AM
    return `${hours}:${minutes} ${period}`;
  };

  const handleSubmit = async (e) => {
   
      
    e.preventDefault();
    const data = new FormData();
    data.append('event_title', formData.event_name);
    data.append('event_venue', formData.event_venue);
    data.append('start_time', formData.start_time);
    data.append('end_time', formData.end_time);
    data.append('start_date', formData.start_date);
    data.append('end_date', formData.end_date);
    data.append('file', file);
    data.append('event_descp', formData.event_descp);

    try {
      const response = await axios.post('https://event-x-backend.vercel.app/api/event_submit', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      if (response.data.message === 'success') {
        navigate('/');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className='bg-[#F8F8FA] m-2'>
      <div className='flex flex-row justify-between items-center ml-6 mr-4'>
        <h1 className="text-xl m-4 md:m-10 md:ml-16 md:text-4xl inter font-bold">
          Event<span className="text-[#0062E0]">X</span>
        </h1>
        <div>
          {
            userdata ? null : (
              <>
                <Link to='/login'>
                  <button className='bg-[#F8F8FA] inter my-2 md:m-6 w-20 md:w-36 mr-4 md:mr-10 text-black p-4 text-center cursor-pointer'>
                    Login
                  </button>
                </Link>
                <Link to='/signup'>
                  <button className='bg-[#1EA1F2] inter my-2 md:m-6 w-20 md:w-36 mr-4 md:mr-16 text-white p-4 border rounded-md text-center cursor-pointer'>
                    SignUp
                  </button>
                </Link>
              </>
            )
          }
        </div>
      </div>

      <section className='mt-5 md:mt-2'>
        <form onSubmit={handleSubmit}>
          <legend className='inter md:text-4xl text-center font-bold'>Create Event</legend>
          
          <div className='m-5 md:ml-60 md:mr-24 inter'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="event_title">Event Title</label>
              <input onChange={handleInputChange} className='ml-0 md:ml-3 p-2' type="text" name="event_name" id="event_title" placeholder="Enter your event title" />
            </div>

            <div className='flex flex-col gap-2 pt-10'>
              <label htmlFor="event_venue">Event Venue</label>
              <input onChange={handleInputChange} className='ml-0 md:ml-3 p-2' type="text" name="event_venue" id="event_venue" placeholder="Enter your event venue" />
            </div>

            <div className='flex flex-col md:flex-row gap-x-6'>
              <div className='flex flex-col gap-2 pt-10'>
                <label htmlFor="start_time">Start time</label>
                <input onChange={handleInputChange} className='ml-0 md:ml-3 p-2 w-full md:w-96' type="time" name="start_time" id="start_time" />
              </div>

              <div className='flex flex-col gap-2 pt-10'>
                <label htmlFor="end_time">End time</label>
                <input onChange={handleInputChange} className='ml-0 md:ml-3 p-2 w-full md:w-96' type="time" name="end_time" id="end_time" />
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-x-6'>
              <div className='flex flex-col gap-2 pt-10'>
                <label htmlFor="start_date">Start date</label>
                <input onChange={handleInputChange} className='ml-0 md:ml-3 p-2 w-full md:w-96' type="date" name="start_date" id="start_date" />
              </div>

              <div className='flex flex-col gap-2 pt-10'>
                <label htmlFor="end_date">End date</label>
                <input onChange={handleInputChange} className='ml-0 md:ml-3 p-2 w-full md:w-96' type="date" name="end_date" id="end_date" />
              </div>
            </div>
          </div>

          <legend className='inter md:text-4xl text-center font-bold mt-10'>Event Description</legend>
          
          <div className='m-2 md:ml-60 md:mr-24 inter'>
            <div className='flex flex-col gap-2 pt-10'>
              <label htmlFor="event_image">Event image</label>
              <input onChange={handleFileChange} className='ml-0 md:ml-3 p-2 w-full md:w-auto' type="file" name="event_image" id="event_image" />
            </div>

            <div className='flex flex-col gap-2 pt-10'>
              <label htmlFor="event_descp">Event description</label>
              <textarea onChange={handleInputChange} className='ml-0 md:ml-3 p-2 h-44' name="event_descp" id="event_descp" placeholder="Type here..." />
            </div>

            <input className="bg-[#1EA1F2] items-center w-full md:w-full text-white p-2 border rounded-md text-center mt-6 md:mt-10 mx-auto block cursor-pointer" type="submit" value="Create Event" />
          </div>
        </form>
      </section>
    </div>
  );
}

export default CreateEvents;
