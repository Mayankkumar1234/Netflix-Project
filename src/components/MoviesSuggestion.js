import React from 'react'
import {IMG_CDN } from './utils/Constants'
import noImage from '../Images/noImage.jpg'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
const MoviesSuggestion = () => {
  const dispatch = useDispatch()
 const moviesData =   useSelector((store)=>store?.search)
 console.log(moviesData)

 const handleNav=()=>{
    // dispatch(toogleVideoSection())
    console.log("Working fine...");
 }

   
  return (
   <div className='relative  md:top-[18vh] top-[14vh] md:px-0 px-4  w-screen flex items-center justify-center bg-black bg-opacity-50 bg-cover' >
   <div  className=' flex md:items-center flex-wrap  h-[60vh] md:pb-0 md:pt-0 pt-8 w-screen w-[90%] relative md-bottom-[0px] bottom-[20px] overflow-hidden md:h-[55vh]'>
   {
    moviesData?.movieResults ? moviesData?.movieResults.map((movie)=>(
      <Link to={`/show/details/${movie.id}`} onClick={handleNav}  className=' md:w-26  border-[2px] z-40 pb-2 pt-0 m-2 py-2 rounded z-40'>
         {(movie.poster_path || movie.backdrop_path)&& <>
       <img className='w-24' src={(movie.poster_path || movie.backdrop_path) ?`${IMG_CDN}${movie.poster_path ||movie.backdrop_path_path}`:`${noImage}`} alt='NoImage' /> 
       </>}
       
      </Link>
    )): <h1>Loading</h1>

    }
   </div>
   </div>
  )
}

export default MoviesSuggestion
