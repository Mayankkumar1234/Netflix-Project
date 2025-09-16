import  {  useRef, useState } from 'react'
import langConfig from './utils/LangConfig'
import {useDispatch, useSelector} from 'react-redux';
import {API_OPTION}  from './utils/api_option'
import MoviesSuggestion from './MoviesSuggestion'
import { addGptMovieResult } from './utils/gptSlice';
const GptSearch = () => {
  //  console.log(langConfig);\
  const dispatch = useDispatch()
   const [movies,setMovies] = useState(null)
    const lang= useSelector(state=>state.supportLanguage?.currentLang)
    // console.log(langConfig[lang] );
   const search = useRef(null)
  const inputHandler=async ()=>{
   console.log(search.current.value);
   const searchMovies =await fetch(`https://api.themoviedb.org/3/search/movie?query=${search.current.value}&include_adult=false&page=1`,API_OPTION)
   let res= await searchMovies.json();
   setMovies(res.results && res);
   const movieResults = res?.results;
     dispatch(addGptMovieResult({movieResults}))

  }

  return (
    <div className='absolute  text-center top-[12vh] h-[100%]  md:top-[8vh] w-screen' onSubmit={(e)=> e.preventDefault()}>
      <form className='bg-black md:pl-6  absolute md:left-[35%] py-2 pb-3 flex items-center md:w-[38%] px-2  left-[10%] rounded'>
        <input ref={search} className='font-medium  md:font-semibold  px-2 py-1  rounded w-[78%] mr-2' type="text" placeholder={langConfig[lang].gptSearchPlaceholder} />
        <button onClick={inputHandler}  className='bg-red-500 px-2 py-1 md:font-semibold font-medium md:text-lg  text-white rounded' type="submit">{langConfig[lang].search}</button>
      </form >
      <MoviesSuggestion />
    </div>
  )
}

export default GptSearch
