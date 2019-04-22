import { withDetailsFeatureAction } from './details.feature';

export const FETCH_DETAILS = 'FETCH_DETAILS';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR';
export const FETCH_SIMILAR_MOVIES = 'FETCH_SIMILAR_MOVIES';
export const FETCH_SIMILAR_MOVIES_SUCCESS = 'FETCH_SIMILAR_MOVIES_SUCCESS';
export const FETCH_SIMILAR_MOVIES_ERROR = 'FETCH_SIMILAR_MOVIES_ERROR';

export const fetchDetails = withDetailsFeatureAction(FETCH_DETAILS);

export const fetchDetailsSuccess = withDetailsFeatureAction(
    FETCH_DETAILS_SUCCESS
);

export const fetchDetailsError = withDetailsFeatureAction(FETCH_DETAILS_ERROR);

export const fetchSimilarMovies = withDetailsFeatureAction(
    FETCH_SIMILAR_MOVIES
);

export const fetchSimilarMoviesSuccess = payload =>
    withDetailsFeatureAction(FETCH_SIMILAR_MOVIES_SUCCESS)(payload);

export const fetchSimilarMoviesError = payload =>
    withDetailsFeatureAction(FETCH_SIMILAR_MOVIES_ERROR)(payload);
