import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
const useNowPlayingMovies = () => {
  //fetch movies from tmdb Api and update store
  const dispatch = useDispatch();
  const getNowPlayiungMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Options
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayiungMovies();
  }, []);
};

export default useNowPlayingMovies;
