import { withDetailsFeatureAction } from './details.feature';

export const FETCH_DETAILS = 'FETCH_DETAILS';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR';
export const FETCH_SIMILAR_MOVIES = 'FETCH_SIMILAR_MOVIES';
export const FETCH_SIMILAR_MOVIES_SUCCESS = 'FETCH_SIMILAR_MOVIES_SUCCESS';
export const FETCH_SIMILAR_MOVIES_ERROR = 'FETCH_SIMILAR_MOVIES_ERROR';

export const fetchDetails = payload =>
    withDetailsFeatureAction(FETCH_DETAILS)(payload);

export const fetchDetailsSuccess = payload =>
    withDetailsFeatureAction(FETCH_DETAILS_SUCCESS)(payload);

export const fetchDetailsError = payload =>
    withDetailsFeatureAction(FETCH_DETAILS_ERROR)(payload);

export const fetchSimilarMovies = payload =>
    withDetailsFeatureAction(FETCH_SIMILAR_MOVIES)(payload);

export const fetchSimilarMoviesSuccess = payload =>
    withDetailsFeatureAction(FETCH_SIMILAR_MOVIES_SUCCESS)(payload);

export const fetchSimilarMoviesError = payload =>
    withDetailsFeatureAction(FETCH_SIMILAR_MOVIES_ERROR)(payload);
