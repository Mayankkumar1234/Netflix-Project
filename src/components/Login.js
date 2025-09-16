import React, { useState,useRef, useEffect } from 'react'
import {Validation} from './utils/Validation';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import {auth} from './utils/Firebase'
import { useDispatch } from 'react-redux';
import {avatar_logo} from './utils/Constants'

const Login = () => {
  const dispatch = useDispatch();

    // console.log(avatar_logo)
  const [loginStatus,setLoginStatus]= useState(false);
  const [validationStatus,setValidationStatus]= useState("");
  const singInUser=()=>{
    // console.log("Hello")
    setLoginStatus(!loginStatus);
    setValidationStatus("")
  }
  
  const name=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  
  const formData=()=>{
    if(!email.current.value)   return;
    
   console.log(email.current.value  , password.current.value );


      const message = Validation(email.current.value,password.current.value);
 setValidationStatus(message);
    if(message)    return;
     if(loginStatus){

      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // console.log(user);
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL:avatar_logo
    }).then(() => {
      // Profile updated!
      const {email,name,photoURL,uid}= user;
      console.log(user);
      // ...
      dispatch({
        name: name,
        email:email,
        photoURL: photoURL,
        uid: uid
      })

    }).catch((error) => {
      // An error occurred

      // ...
      setValidationStatus(error.message)
    });

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValidationStatus(errorMessage +" "+ errorCode);
    // ..
  });
     }else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setValidationStatus(errorCode+" "+errorMessage);
      });
    
     }
  }
  useEffect(()=>{
    formData()
  })

  return (
    <div className='absolute bg-black opacity-90 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col justify-start px-20 z-10 py-6 w-[35%] gap-3' >
       <h1 className='font-bold text-white text-3xl z-2 mb-4'>{loginStatus ? "sign Up":"Sign In"}</h1>
      <form className='flex flex-col gap-4 w-[100%] items-center' onSubmit={(e)=>e.preventDefault() }>
       {loginStatus && <input ref={name} className='rounded text-white bg-zinc-900 opacity-80 w-[100%] px-2 py-3 border-[1px] border-zinc-200 ' placeholder='Enter Name' />}
       <input ref={email} className='rounded text-white bg-zinc-900 opacity-80 w-[100%] px-2 py-3 border-[1px] border-zinc-200 ' placeholder='Email or mobile number' />
         <input ref={password}  className='rounded text-white bg-zinc-900 opacity-80 w-[100%] px-2 py-3 border-[1px] border-zinc-200' placeholder='Password' />
          <button onClick={formData} className='font-semibold text-white bg-red-700 py-1 w-[100%] py-3 rounded'>{loginStatus ? "Sign Up" :"Sign In"}</button>
      </form>
           <a className='text-red-400 text-center font-semibold' href='#'>{loginStatus?validationStatus:validationStatus}</a>
             <div className='flex gap-3'>
              <input type='checkbox' />
               <p className='text-white text-lg'>Remember me</p>
             </div>
             {loginStatus ? <p className='text-zinc-300'>Already Registered? <span className='text-white font-semibold cursor-pointer' onClick={()=>singInUser()}>Sign In now</span> </p>:  <p className='text-zinc-300'>New to Netflix? <span className='text-white font-semibold cursor-pointer' onClick={()=>singInUser()}>Sign up now</span> </p> }
     </div>
  )
}

export default Login;
