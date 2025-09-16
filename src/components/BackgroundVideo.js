import { useSelector } from "react-redux"
import useMovieTrailer from "../hooks/UseMovieTrailer"

const BackgroundVideo = ({movieId}) => {
  useMovieTrailer(movieId)
    const trailervideo =   useSelector((state)=> state.movies.trailerVideo)
  //  console.log(trailervideo)

  // console.log(trailervideo)
  return (
    <div  className="w-screen relative bg-cover overflow-hidden" >
    <iframe  className="w-screen  bg-cover md:h-[92vh] h-screen overflow-hidden" style={{overflow:"hidden"}} src={`https://www.youtube.com/embed/${trailervideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=0`}   
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>   
    </div>
  )
}

export default BackgroundVideo
