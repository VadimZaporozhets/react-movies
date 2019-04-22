import { withMoviesFeatureAction } from './movies.feature';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const fetchMovies = withMoviesFeatureAction(FETCH_MOVIES);

export const fetchMoviesSuccess = withMoviesFeatureAction(FETCH_MOVIES_SUCCESS);

export const fetchMoviesError = withMoviesFeatureAction(FETCH_MOVIES_ERROR);
