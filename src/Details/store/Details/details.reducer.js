import { withDetailsFeatureLabel } from './details.feature';
import {
    FETCH_DETAILS,
    FETCH_DETAILS_ERROR,
    FETCH_DETAILS_SUCCESS,
    FETCH_SIMILAR_MOVIES,
    FETCH_SIMILAR_MOVIES_ERROR,
    FETCH_SIMILAR_MOVIES_SUCCESS
} from './details.actions';

export const defaultState = {
    data: {},
    loadingDetails: false,
    loadingMovies: false,
    error: '',
    similarMovies: []
};

export const movieDetails = (state = defaultState, action) => {
    switch (action.type) {
        case withDetailsFeatureLabel(FETCH_DETAILS):
            return {
                data: {},
                loadingDetails: true,
                loadingMovies: false,
                error: '',
                similarMovies: []
            };
        case withDetailsFeatureLabel(FETCH_DETAILS_SUCCESS):
            return {
                data: action.payload,
                loadingDetails: false,
                loadingMovies: false,
                error: '',
                similarMovies: []
            };
        case withDetailsFeatureLabel(FETCH_DETAILS_ERROR):
            return {
                loadingDetails: false,
                loadingMovies: false,
                error: action.payload,
                data: {},
                similarMovies: []
            };
        case withDetailsFeatureLabel(FETCH_SIMILAR_MOVIES):
            return {
                ...state,
                loadingMovies: true,
                error: '',
                similarMovies: []
            };
        case withDetailsFeatureLabel(FETCH_SIMILAR_MOVIES_SUCCESS):
            return {
                ...state,
                loadingMovies: false,
                error: '',
                similarMovies: action.payload
            };
        case withDetailsFeatureLabel(FETCH_SIMILAR_MOVIES_ERROR):
            return {
                loadingDetails: false,
                loadingMovies: false,
                error: action.payload,
                data: {},
                similarMovies: []
            };
        default:
            return state;
    }
};
