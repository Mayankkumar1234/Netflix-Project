import { configureStore } from "@reduxjs/toolkit";
import userReducer from './counterSlice'
import moviesReducer from './MovieCounterSlice'
import supportLanguageReducer from './SuplangSlice'
import searchReducer from   './gptSlice'
export default configureStore({
  reducer:{
    user:userReducer,
    movies:moviesReducer,
    supportLanguage:supportLanguageReducer, 
    search:searchReducer
  }
})