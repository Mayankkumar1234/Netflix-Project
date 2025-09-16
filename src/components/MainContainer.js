import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import { useSelector } from 'react-redux'
 import VideoTitle from './VideoTitle'
 import SecondaryContainer from './SecondaryContainer'
const MainContainer = () => {
   
 const movies= useSelector((state)=> state.movies?.nowPlayingMovies);
if(!movies)   return 
 
 
    const mainMovie= movies.movies[19];
    const { original_title, overview, id } = mainMovie;
  return (
    <div className='bg-zinc-100 w-[100%] relative overflow-x-hidden bg-cover'>
     <BackgroundVideo movieId={id} />
    <VideoTitle overview={overview} title={original_title} />
    <SecondaryContainer />
      </div>
  )
}

export default MainContainer
