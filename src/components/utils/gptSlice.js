import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    search: false,
    movieResults: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.search = !state.search;
    },
    addGptMovieResult: (state, action) => {
      const {  movieResults } = action.payload;
      state.movieResults = movieResults;
    },

  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;