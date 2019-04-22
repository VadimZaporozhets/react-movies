import { withDetailsFeatureLabel } from './details.feature';
import {
    FETCH_DETAILS,
    FETCH_DETAILS_ERROR,
    FETCH_DETAILS_SUCCESS,
    FETCH_SIMILAR_MOVIES,
    FETCH_SIMILAR_MOVIES_ERROR,
    FETCH_SIMILAR_MOVIES_SUCCESS
} from './details.actions';

export const initialState = {
    data: {},
    loadingDetails: false,
    loadingMovies: false,
    detailsError: '',
    similarMoviesError: '',
    similarMovies: []
};

export const movieDetails = (state = initialState, action) => {
    switch (action.type) {
        case withDetailsFeatureLabel(FETCH_DETAILS):
            return {
                ...state,
                data: {},
                loadingDetails: true,
                detailsError: ''
            };
        case withDetailsFeatureLabel(FETCH_DETAILS_SUCCESS):
            return {
                ...state,
                data: action.payload,
                loadingDetails: false,
                detailsError: ''
            };
        case withDetailsFeatureLabel(FETCH_DETAILS_ERROR):
            return {
                ...state,
                loadingDetails: false,
                detailsError: action.payload,
                data: {}
            };
        case withDetailsFeatureLabel(FETCH_SIMILAR_MOVIES):
            return {
                ...state,
                loadingMovies: true,
                similarMoviesError: '',
                similarMovies: []
            };
        case withDetailsFeatureLabel(FETCH_SIMILAR_MOVIES_SUCCESS):
            return {
                ...state,
                loadingMovies: false,
                similarMoviesError: '',
                similarMovies: action.payload
            };
        case withDetailsFeatureLabel(FETCH_SIMILAR_MOVIES_ERROR):
            return {
                ...state,
                loadingMovies: false,
                similarMoviesError: action.payload,
                similarMovies: []
            };
        default:
            return state;
    }
};
