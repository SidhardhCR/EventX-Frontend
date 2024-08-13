import React from 'react';
import { FiSearch } from "react-icons/fi";
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
    </>
  );
}

export default Home;
