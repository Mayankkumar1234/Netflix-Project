import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import {  Route, Routes } from 'react-router-dom';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from './utils/counterSlice'; 
import { auth } from './utils/Firebase';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import VideoShow from './VideoShow';
import BackgroundVideo from './BackgroundVideo';

const Main = () => {
  const  dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(()=>{

    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const { uid,email,displayName,photoURL} =user
        // console.log(user);
           dispatch(addUser({uid,email,displayName,photoURL}))

           navigate('/browse');
    
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
  },[])
  return (
   <>
    <div className='w-full h-full bg-black' >
          < img className='w-full h-screen' src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_large.jpg" alt="Bg-image" />
         <Header />
      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/show/details/:movieId" element={<VideoShow />} />
        <Route path='/show/details/:movieId/trailer' element={<BackgroundVideo />} />
      </Routes>
   </>
  )
}

export default Main
