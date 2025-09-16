
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { API_OPTION } from '../components/utils/api_option';
import { addPopularMovies } from '../components/utils/MovieCounterSlice';
const UsePopularMovies = () => {
 const popularMovies = useSelector((state)=>state.popularMovies)
  const dispatch = useDispatch();

  const getPopularMovies =async ()=>{
    const res=await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTION);
    const result=await res.json();
    let movies = result?.results;
   
  dispatch(addPopularMovies({movies}))

  }
  useEffect(()=>{
    !popularMovies && getPopularMovies();

  },[])

}
//my-project/src/hooks/UsePopularMovies.js
export default UsePopularMovies

