import { withMoviesFeatureLabel } from './movies.feature';
import {
    FETCH_MOVIES,
    FETCH_MOVIES_ERROR,
    FETCH_MOVIES_SUCCESS
} from './movies.actions';

export const defaultState = {
    data: [],
    loading: false,
    error: '',
    total: 0
};

export const movies = (state = defaultState, action) => {
    switch (action.type) {
        case withMoviesFeatureLabel(FETCH_MOVIES):
            return {
                data: [],
                loading: true,
                error: '',
                total: 0
            };
        case withMoviesFeatureLabel(FETCH_MOVIES_SUCCESS):
            return {
                data: action.payload.data,
                loading: false,
                error: '',
                total: action.payload.total
            };
        case withMoviesFeatureLabel(FETCH_MOVIES_ERROR):
            return {
                data: [],
                loading: false,
                error: action.payload,
                total: 0
            };
        default:
            return state;
    }
};
