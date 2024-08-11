import React from 'react';

function Card({ title, venue, date, time, imageUrl }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US',{
    weekday : 'long',
    month : 'long',
    day: 'numeric'
  });
  return (
    <div className='w-full max-w-[24.167rem] h-auto bg-white drop-shadow-xl blur-0 shadow-[0_-2px_10px_-5px_rgba(0,0,0,0.3)] rounded-lg flex flex-col'>
      <div 
        className="m-4 rounded-md bg-cover bg-center w-64 h-60 sm:w-[21.90rem]"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className='w-[2.813rem] h-[1.375rem] bg-white m-3 rounded text-center text-[10px] place-content-center text-[#19AFFF]'>
          Free
        </div>
      </div>
      <div className='flex flex-col p-4 ml-2'>
        <p className='inter font-normal text-base mb-2'>{title}</p>
        <div className='flex flex-row text-xs mb-2 text-[#1EA1F2]'>
          <p>{formattedDate},</p>
          <p className='ml-2'>{time}</p>
        </div>
        <p className='text-xs text-[#7E7E7E]'>{venue}</p>
      </div>
    </div>
  );
}

export default Card;
