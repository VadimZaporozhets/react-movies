import { DetailsFeature } from './details.feature';

export const FETCH_DETAILS = 'FETCH_DETAILS';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR';
export const FETCH_SIMILAR_MOVIES = 'FETCH_SIMILAR_MOVIES';
export const FETCH_SIMILAR_MOVIES_SUCCESS = 'FETCH_SIMILAR_MOVIES_SUCCESS';
export const FETCH_SIMILAR_MOVIES_ERROR = 'FETCH_SIMILAR_MOVIES_ERROR';

export const fetchDetails = DetailsFeature.actionCreator(FETCH_DETAILS);

export const fetchDetailsSuccess = DetailsFeature.actionCreator(
    FETCH_DETAILS_SUCCESS
);

export const fetchDetailsError = DetailsFeature.actionCreator(
    FETCH_DETAILS_ERROR
);

export const fetchSimilarMovies = DetailsFeature.actionCreator(
    FETCH_SIMILAR_MOVIES
);

export const fetchSimilarMoviesSuccess = payload =>
    DetailsFeature.actionCreator(FETCH_SIMILAR_MOVIES_SUCCESS)(payload);

export const fetchSimilarMoviesError = payload =>
    DetailsFeature.actionCreator(FETCH_SIMILAR_MOVIES_ERROR)(payload);
