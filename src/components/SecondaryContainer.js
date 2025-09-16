import React from 'react'
import MoviesList from './MoviesList';
import {useSelector} from "react-redux"

const SecondaryContainer = () => {
  const data = useSelector((state)=>state.movies)
 
  return (
    <div className='w-screen h-full bg-black '>
        <MoviesList title={"Now playing"} playingMovies={data?.nowPlayingMovies} />
        <MoviesList title={"Treding Movies"} playingMovies={data?.nowPlayingMovies} />
        <MoviesList title={"Popular movies"} playingMovies={data?.popularMovies} />
        <MoviesList title={"Upcoming Movies"} playingMovies={data?.nowPlayingMovies} />
      </div>
  )
}

export default SecondaryContainer
