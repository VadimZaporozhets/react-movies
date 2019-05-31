import { MoviesFeature } from './movies.feature';

export const fetchMovies = MoviesFeature.ActionCreator('FETCH_MOVIES');

export const fetchMoviesSuccess = MoviesFeature.ActionCreator(
    'FETCH_MOVIES_SUCCESS'
);

export const fetchMoviesError = MoviesFeature.ActionCreator(
    'FETCH_MOVIES_ERROR'
);

export const clearMovies = MoviesFeature.ActionCreator('CLEAR_MOVIES');

export const searchMovies = MoviesFeature.ActionCreator('SEARCH_MOVIES');

export const loadInitialMovies = MoviesFeature.ActionCreator(
    'LOAD_INITIAL_MOVIES'
);
