import { useEffect } from 'react';
import {API_OPTION} from '../components/utils/api_option'
import { useDispatch, useSelector } from "react-redux";
import { addtrailerVideo } from '../components/utils/MovieCounterSlice';
function useMovieTrailer(movieId){

   let trailerMovie = useSelector((state)=>state.trailerVideo)
   const dispatch = useDispatch() 

   const getMovieTrailer =async ()=>{
    const trailers= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTION)
    const res= await trailers.json();
  const singlevideo = res.results.filter((video)=>video.type==="Trailer")
  let video =  singlevideo[0];
  // console.log(singlevideo)
  // console.log(video)
  dispatch(addtrailerVideo(video))
   }
     useEffect(()=>{
      !trailerMovie && getMovieTrailer()
     
     },[])
}

export default useMovieTrailer;