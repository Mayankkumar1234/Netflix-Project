import Image from '../Images/logo.png'
import { auth } from './utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { avatar_logo, langAval } from './utils/Constants';
import { toggleGptSearchView } from './utils/gptSlice';
import {changeCurrentlang} from  './utils/SuplangSlice'
const Header = () => {
const user = useSelector((state)=>state.user);
const isSearch = useSelector(state=> state?.search)
// console.log(isSearch.search);
// console.log(user);
 const dispatch  = useDispatch()
  const navigate = useNavigate()
  
  const handleEvent = ()=>{
  
signOut(auth).then(() => {
     navigate('/')
}).catch((error) => {
  // An error happened.
  console.log(error);
});
  }
 
const handlePage=()=>{
  dispatch(toggleGptSearchView())
}
const changeLangHandler =(e)=>{
  dispatch(changeCurrentlang(e.target.value));
}
  return (
    <div className='flex absolute top-[0%] pt-2 md:pt-0 gap-[2px] md:justify-between md:px-6 px-4 z-10'>
     < img className='md:w-[12%] w-[30%] bg-grey-400' src={Image} alt='logo' />
      {
        user &&  <div className='flex md:gap-2 gap-1 items-center '>
          <select className='rounded px-1 py-1' onClick={(e)=> changeLangHandler(e)} >
          { langAval?.map((lang, idx)=> <option key={idx}  value={lang.indentifier}>{lang.name}</option>)}
          </select>
          <button className='md:pr-2 bg-zinc-200 md:px-2 p-1  py-1   mr-2 rounded-md' onClick={handlePage}>{isSearch.search?"Home" : "Search"}</button>
           <img className='pt-2' src={avatar_logo} alt='logo' />
        <button onClick={handleEvent} className='text-white md:font-semibold md:text-xl   text-lg ' >signOut</button>
        
          </div>
          }
    </div>
  )
}

export default Header
