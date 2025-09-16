import React from "react";
import MovieCard from "./MovieCard";
const MoviesList = ({ title, playingMovies }) => {
  return (
    <div className=" -mt-28  font-semibold text-2xl relative z-auto">
      /* IE and Edge */
      <h1 className="text-white w-full  pb-4">{title}</h1>
      <div
        className="flex overflow-x-auto relative z-50 mb-8"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        {playingMovies?.movies &&
          playingMovies?.movies?.map((movie, idx) => (
            <div key={idx} className="flex pb-12">
              <MovieCard poster={movie.poster_path} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default MoviesList;
