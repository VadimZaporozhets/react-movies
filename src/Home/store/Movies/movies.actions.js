import { withMoviesFeatureAction } from './movies.feature';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';

export const fetchMovies = payload =>
    withMoviesFeatureAction(FETCH_MOVIES)(payload);

export const fetchMoviesSuccess = payload =>
    withMoviesFeatureAction(FETCH_MOVIES_SUCCESS)(payload);

export const fetchMoviesError = payload =>
    withMoviesFeatureAction(FETCH_MOVIES_ERROR)(payload);
