import { MoviesFeature } from './movies.feature';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
const CLEAR_MOVIES = 'CLEAR_MOVIES';

export const fetchMovies = MoviesFeature.ActionCreator(FETCH_MOVIES);

export const fetchMoviesSuccess = MoviesFeature.ActionCreator(
    FETCH_MOVIES_SUCCESS
);

export const fetchMoviesError = MoviesFeature.ActionCreator(FETCH_MOVIES_ERROR);

export const clearMovies = MoviesFeature.ActionCreator(CLEAR_MOVIES);
