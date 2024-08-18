import React from 'react';
import { FiSearch } from "react-icons/fi";
import { PiLinkedinLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from './Dropdown';
import Card from './Card';
import { Link } from 'react-router-dom';

function Home() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventType, setEventType] = useState('');
  const [location, setLocation] = useState('');
  const [dateTime, setDateTime] = useState('');

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Increase the count by 6
  };

  const getEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/events');
      setEvents(response.data.events);
      setFilteredEvents(response.data.events);
    } catch (err) {
      console.log(err);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/login/success', { withCredentials: true });
      setUserdata(response.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFilterChange = () => {
    let filtered = events;

    if (eventType) {
      filtered = filtered.filter(event => event.type === eventType);
    }

    if (location) {
      filtered = filtered.filter(event => event.event_venue === location);
    }

    if (dateTime) {
      filtered = filtered.filter(event => event.start_date === dateTime);
    }

    setFilteredEvents(filtered);
  };

  useEffect(() => {
    getUser();
    getEvents();
  }, []);

  return (
    <>
      <section>
        <div className='bg-[#F8F8FA] mx-4 my-3 md:mx-16'>
          <div className='flex md:flex-row justify-between items-center'>
            <h1 className="text-xl m-4 md:m-10 md:ml-16 md:text-4xl inter font-bold">
              Event<span className="text-[#0062E0]">X</span>
            </h1>
            <div>
              <Link to='/create_events'><button className='bg-[#1EA1F2] inter my-4 md:m-6 w-full md:w-72 mr-4 md:mr-16 text-white p-4 border rounded-md text-center cursor-pointer'>
                Create Events
              </button></Link>
            </div>
          </div>

          <div className="bg-[url('/home_hero_img.png')] w-full h-[300px] md:h-[560px] bg-cover border rounded-xl flex flex-col justify-center items-center">
            <h2 className="text-white text-xl md:text-5xl inter font-[600] text-center p-2 md:p-5">Manage Events with <span className="text-[#0062E0] font-[700]">Ease</span></h2>
            <div className='bg-[#0062E0] w-5/6 md:w-4/5 h-20 flex md:flex-row items-center justify-between rounded-3xl absolute md:bottom-0 translate-y-36 md:translate-y-9 p-4 md:p-16'>
              <div className='flex flex-col items-center md:items-start'>
                <p className='inter text-white pb-2 font-[400] text-[8px] md:text-[16px]'>Looking for</p>
                <Dropdown 
                  name={'Choose event type'} 
                  options={['Conference', 'Workshop', 'Meetup']} 
                  onChange={(value) => setEventType(value)} 
                />
              </div>
              <div className='flex flex-col items-center md:items-start'>
                <p className='inter text-white pb-2 font-[400] text-[8px] md:text-[16px]'>Location</p>
                <Dropdown 
                  name={'Choose location'} 
                  options={['Rajagiri School of Engineering & Technology', 'ONLINE EVENT - Attend anywhere', 'Los Angeles']} 
                  onChange={(value) => setLocation(value)} 
                />
              </div>
              <div className='flex flex-col items-center md:items-start'>
                <p className='inter text-white pb-2 font-[400] text-[8px] md:text-[16px]'>When</p>
                <Dropdown 
                  name={'Choose date and time'} 
                  options={['Today', 'This Week', 'This Month']} 
                  onChange={(value) => setDateTime(value)} 
                />
              </div>
              <div 
                className='bg-[#1EA1F2] w-8 h-8 md:w-16 md:h-16 mt-4 md:mt-0 flex justify-center rounded-md items-center cursor-pointer'
                onClick={handleFilterChange}
              >
                <FiSearch color='white' size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='my-24'>
        <div className='bg-[#F8F8FA] mx-4 my-3 md:mx-16 p-6'>
          <h1 className="text-xl md:text-4xl font-bold m-4 md:m-10">
            Upcoming <span className="text-[#0062E0]">Events</span>
          </h1>
          <div className='flex flex-wrap md:ml-10 gap-x-10 gap-y-8'>
            {
              filteredEvents.slice(0, visibleCount).map((data, index) => (
                <Card 
                  key={index} 
                  title={data.event_title} 
                  venue={data.event_venue} 
                  date={data.start_date} 
                  time={data.start_time} 
                  imageUrl={'http://localhost:3000/api/images/' + data._id + '.jpg'} 
                />
              ))
            }
          </div>

          {visibleCount < filteredEvents.length && (
            <div className='flex justify-center mt-8'>
              <button
                onClick={loadMore}
                className='bg-[#1EA1F2] text-white px-6 py-3 md:py-4 rounded-md text-sm md:text-base'
              >
                Load more...
              </button>
            </div>
          )}
        </div>
      </section>


      <section className='pt-10'>

  <div className=''>
  
    <div className='w-full h-64 bg-[#0062E0] flex '>
     <div>
     <img  className=' m-5 md:ml-20 translate-y-28 md:-translate-y-16'  src="/bottom.png" alt="" />
     </div>
      <div className='flex flex-col '>
        <h2 className='inter text-white font-bold md:text-4xl m-4 md:m-8 '>Make your own Event</h2>
        <p className='inter text-white text-xs md:text-base ml-5 md:ml-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div>
        <Link to='/create_events'>
        <button className='bg-[#1EA1F2] ml-8 inter my-4 md:m-6 w-32 md:w-72 mr-4 md:mr-16 text-white p-4  rounded-md text-center cursor-pointer text-sm md:text-lg'>
          Create Events
        </button></Link>
      </div>
      </div>

    </div>
   
  </div>
</section>

<footer className="bg-[#0062E0] w-full h-auto mt-20">
  <div className="flex flex-col items-center justify-center px-4 py-8 md:px-10">
    <h1 className="text-xl md:text-4xl font-bold text-white mb-6">
      EventX
    </h1>
    
    <form className="w-full max-w-lg">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <input 
          className="bg-white p-2 rounded w-full md:w-2/3" 
          type="email" 
          placeholder="Enter your email" 
        />
        <input 
          className="bg-[#1EA1F2] text-white p-2 rounded-md w-full md:w-1/3 cursor-pointer" 
          type="submit" 
          value="Subscribe" 
        />
      </div>
    </form>

    <div className="flex flex-wrap justify-center mt-8">
      <a className="text-white font-light text-base px-4 py-2" href="#">Home</a>
      <a className="text-white font-light text-base px-4 py-2" href="#">About</a>
      <a className="text-white font-light text-base px-4 py-2" href="#">Service</a>
      <a className="text-white font-light text-base px-4 py-2" href="#">Get in touch</a>
      <a className="text-white font-light text-base px-4 py-2" href="#">FAQs</a>
    </div>

    <hr className="w-full bg-white mt-8" />
  </div>

  <div className="flex flex-col md:flex-row justify-between items-center px-4 py-6 md:px-10">
    <div className="mb-4 md:mb-0 md:ml-20">
      <button className="bg-[#1EA1F2] w-32 md:w-20 text-white p-3 rounded-md text-center cursor-pointer text-xs md:text-sm">
        English
      </button>
      <button className=" w-32 md:w-20 text-white rounded-md text-center cursor-pointer text-xs md:text-sm">
        Hindi
      </button>
    </div>

    <div className="flex flex-row gap-x-6 justify-center mb-4 md:mb-0">
      <PiLinkedinLogo color="white" size={31} />
      <PiInstagramLogo color="white" size={31} />
      <PiFacebookLogo color="white" size={31}/>
    </div>

    <div className="text-center md:text-left">
      <p className="inter text-white text-xs md:text-base">
        Non Copyrighted © 2024 Upload by EventX
      </p>
    </div>
  </div>
</footer>


    </>
  );
}

export default Home;
