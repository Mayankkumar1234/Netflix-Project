import useMovieData from '../hooks/useMovieData';
import MainContainer from './MainContainer';
import UsePopularMovies from '../hooks/UsePopularMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch'
 const Browse = () => {

   const isSearch = useSelector(state=> state?.search)
  //  console.log(isSearch.search);
  useMovieData()
  UsePopularMovies()

     

  return (
    <div className='w-full absolute top-[0%] bg-cover bg-grey-600'>
       
       {isSearch.search ? <GptSearch />  :<MainContainer />}
       </div>
  )
}

export default Browse;
