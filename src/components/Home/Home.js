import React,{useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
const dispatch = useDispatch();
const movieText = "Harry";
  useEffect(() => {
   const fetchMovie = async () => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err) => {
        console.log("Err :", err);
    });
    dispatch(addMovies(response.data));
   };
   fetchMovie();
  }, [])
  
  return (
    <div>
    <div className='banner-img'>
    </div>
    <MovieListing/>
    </div>
  )
}

export default Home