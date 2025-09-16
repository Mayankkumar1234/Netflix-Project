import { createSlice } from "@reduxjs/toolkit";


const supportLangSlice= createSlice({
  name:"Lang",
  initialState:{
    currentLang:"en",
  },
  reducers:{
    changeCurrentlang:(state,action)=>{
       state.currentLang=action.payload;
    }
  }
})

export default supportLangSlice.reducer;
export const {changeCurrentlang}=supportLangSlice.actions;