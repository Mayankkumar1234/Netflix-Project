import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useMovieTrailer from '../hooks/UseMovieTrailer'
import { useSelector } from 'react-redux'
import {IMG_CDN}  from '../components/utils/Constants'
import { CgPlayButton } from "react-icons/cg";

const VideoShow = () => {
  const { movieId } = useParams()
  console.log(movieId)
    const particularMovie= useSelector((store)=>store.search?.movieResults)
   const getMovie = particularMovie && particularMovie?.filter((p)=>p.id==movieId);
      console.log(getMovie)

      // const showVideoHandler=()=>{
      //   useMovieTrailer(video_id)
      // }
  
  return (
    <div className='absolute bg-black z-30 top-[0] w-screen h-full '>
    {
      getMovie ? getMovie?.map((movie)=>(
        <div className=' h-full w-full flex flex-end justify-between'  style={{background:`linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)) ,url(${IMG_CDN}${movie.poster_path|| movie.backdrop_path && movie.poster_path || movie.backdrop_path})`, backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} >
         <div className='w-[40%]  '>
          <img className='ml-[14%] mt-[14%] h-[45vh] w-[45%] rounded shadow-xl' src={`${IMG_CDN}${movie.poster_path|| movie.backdrop_path && movie.poster_path || movie.backdrop_path}`} alt="" />
         </div>
         <div className='w-[60%] px-24  mt-12 text-center'>
          <h1 className='text-6xl font-extrabold text-white pb-12'>{movie.title}</h1>
           <div className='flex gap-2 flex-start justify-center items-center mb-12'>
          <div className='flex items-center gap-3'>
          <span className='flex items-center gap-2 font-semibold text-white text-2xl'>Movie Popularity :</span>
          <p className='bg-orange-500 w-[3vw] text-lg text-center font-lg text-white py-2 rounded-[50%]'>{movie.popularity.toFixed(1)}</p>
         
          </div>
            <div className='flex items-center gap-3'>
            <span className='flex items-center gap-2 font-semibold text-white text-2xl'>Release Date :</span>
          <p className='font-lg text-white '>{movie.release_date}</p>
        
            </div>
            <div className='flex items-center gap-3'>
            <span className='flex items-center gap-2 font-semibold text-white text-2xl'>Average Rate :</span>
           <p  className='font-lg text-white ' >{movie.vote_average}</p>
          
            </div>
            </div>
           <div className='flex flex-start flex-col justify-start items-start '>
           <p className='text-white font-semibold text-2xl pl-24 pb-6'>Overview</p>
           <p className='font-large text-white px-24 '>{movie.overview}</p>
            <Link className ='flex items-center text-white bg-zinc-500 px-4 py-2 mt-6 font-medium rounded text-xl ml-28 '><CgPlayButton className='text-white text-2xl  hover:bg-opacity-80' />  click</Link>
           </div>
         </div>
        </div>
      )): <div>
        <h1>Loading...</h1>
      </div>
    }
    </div>
  )
}

export default VideoShow


//style={{backgroundImage:`url(${})`}}

//absolute top-[16%] left-[8%]