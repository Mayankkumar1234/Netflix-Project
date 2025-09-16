import React from 'react'
import { CgPlayButton } from "react-icons/cg";
const VideoTitle = ({overview,title}) => {
  return (
    // <div className='overflow-x-hidden aspect-video pt-[16%] px-6 md:px-24 absolute text-white '>
    //    <h1 className='font-bold text-3xl text-white w-1/4'>{title.toUpperCase()}</h1>
    //   <p className='md:inline-block py-6 relative text-lg w-1/4'>{overview}</p>
    //    <div className='flex gap-2 mt-4'>
    //     <button className='bg-white flex items-center rounded-md text-black font-semibold justify-center px-4 pr-6 py-2'> <CgPlayButton className='text-black text-2xl  hover:bg-opacity-80' /> Click</button>
    //     <button className='bg-zinc-700 rounded-md text-white font-md font-semibold px-4 py-2 hover:bg-opacity-80'>More Info</button>
    //    </div>
    // </div>
    <div className='absolute md:px-24 pt-[14%] h-full bg-gradient-to-r from-black top-[0%]'>
      <h2 className='font-semibold text-3xl text-white -mt-2'>{title.toUpperCase()}</h2>
      <p className='md:inline-block py-6 relative text-white text-md w-1/4 tracking-tight -mt-2'>{overview}</p>
      <div className='flex gap-2 -mt-2'>
         <button className='bg-white flex items-center rounded-md text-black font-semibold justify-center px-4 pr-6 py-2'> <CgPlayButton className='text-black text-2xl  hover:bg-opacity-80' /> Click</button>
         <button className='bg-zinc-700 rounded-md text-white font-md font-semibold px-4 py-2 hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
