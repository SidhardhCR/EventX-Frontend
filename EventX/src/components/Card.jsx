import React from 'react'

function Card({title,venue,date,time}) {
  return (
    <div className='w-full max-w-[24.167rem] h-auto bg-white drop-shadow-xl blur-0 shadow-[0_-2px_10px_-5px_rgba(0,0,0,0.3)] rounded-lg flex flex-col '>
  <div className="m-4 rounded-md bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/fa93/e81a/ccf7489801e606616ea6e64e4fd2c60a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mBSb6RQWIBlihxt-8a7FRHFEx4PUYZZAdFPmcEfXW4d1kEZ0cxh8gc679rqZzVjSW1ThdFp80Wd6CAoBtUQ1KQSA7kZxjlbGLQxkEuS6fmcRDyoGhgYvf5dONHa8joMUb4GlfAaGoYKOzAiuZjgqQ9wgpBRfrDUxWnSi8hSs2iEBK7Uh3fCvx0aeN8LwCml13uBTKCUgZONd3tlGQV4meBZh0pCGAuc-72X7yDnhsa2VI9ovMRy0YjqEvqjBUa3JaqCuhzdibXvLhqX1pHexS3uW9WfARRGo3P17yWAb5oIezNECVzWwrmW176C7BCXBmvsRb~j6FOy2CvKn3R2Tqg__')] w-64 h-60 sm:w-[21.90rem]">
    <div className='w-[2.813rem] h-[1.375rem] bg-white m-3 rounded text-center text-[10px] place-content-center text-[#19AFFF]'>Free</div>
  </div>
  <div className='flex flex-col p-4 ml-2'>
    <p className='inter font-normal text-base mb-2'>{title}</p>
    <div className='flex flex-row text-xs mb-2 text-[#1EA1F2]'>
        <p>{date}</p>
        <p className='ml-2'>{time}</p>
    </div>
    <p className='text-xs text-[#7E7E7E]'>{venue}</p>
  </div>
</div>

  
  )
}

export default Card