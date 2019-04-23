import { MoviesFeature } from './movies.feature';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const fetchMovies = MoviesFeature.actionCreator(FETCH_MOVIES);

export const fetchMoviesSuccess = MoviesFeature.actionCreator(
    FETCH_MOVIES_SUCCESS
);

export const fetchMoviesError = MoviesFeature.actionCreator(FETCH_MOVIES_ERROR);
