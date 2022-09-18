import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIKey } from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async () => {
    const movieText = "Harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${seriesText}&type=series`);
    return response.data;
})

export const fetchAsyncMovieShowsDetail = createAsyncThunk('movies/fetchAsyncMovieShowsDetail',async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
})

const initialState = {
    movies : {},
    shows : {},
    selectedMovieShow : {},
};

const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers : {
    removeSelectedMovieShow : (state) => {
        state.selectedMovieShow = {};
    }
   },
    extraReducers : {
        [fetchAsyncMovies.pending] : () => {
        console.log('pending');
        },
        [fetchAsyncMovies.fulfilled] : (state,{payload}) => {
            console.log('fetched succesfully!');
            return {...state,movies: payload};
        },
        [fetchAsyncMovies.rejected] : () => {
            console.log('Rejected');
        },
        [fetchAsyncShows.fulfilled] : (state,{payload}) => {
            console.log('shows fetched succesfully!');
            return {...state,shows: payload};
        },
        [fetchAsyncMovieShowsDetail.fulfilled] : (state,{payload}) => {
            console.log('fetched succesfully!');
            return {...state,selectedMovieShow: payload};
        },
    }
});

export const { removeSelectedMovieShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieShow = (state) => state.movies.selectedMovieShow;
export default movieSlice.reducer; 