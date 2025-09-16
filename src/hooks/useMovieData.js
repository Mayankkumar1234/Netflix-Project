
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../components/utils/MovieCounterSlice';
import { useEffect } from 'react';
import { API_OPTION } from '../components/utils/api_option';

const useMovieData = () => {
 const nowPlayingMovies = useSelector((state)=>state.nowPlayingMovies)
  const dispatch = useDispatch();

  const getMovies =async ()=>{
    const res=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTION);
    const result=await res.json();
   let movies = result.results;
   
  dispatch(addNowPlayingMovies({movies}))

  }
  useEffect(()=>{
    !nowPlayingMovies && getMovies();

  },[])

}

export default useMovieData


//<iframe width="1349" height="480" src="https://www.youtube.com/embed/VUCNBAmse04" title="The Wild Robot | Final Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>