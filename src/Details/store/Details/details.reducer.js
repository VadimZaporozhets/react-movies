import { DetailsFeature } from './details.feature';
import {
    FETCH_DETAILS,
    FETCH_DETAILS_ERROR,
    FETCH_DETAILS_SUCCESS
} from './details.actions';

export const initialState = {
    data: {},
    loadingDetails: false,
    detailsError: ''
};

export const movieDetails = (state = initialState, action) => {
    switch (action.type) {
        case DetailsFeature.withDetailsFeatureLabel(FETCH_DETAILS):
            return {
                ...state,
                data: {},
                loadingDetails: true,
                detailsError: ''
            };
        case DetailsFeature.withDetailsFeatureLabel(FETCH_DETAILS_SUCCESS):
            return {
                ...state,
                data: action.payload,
                loadingDetails: false
            };
        case DetailsFeature.withDetailsFeatureLabel(FETCH_DETAILS_ERROR):
            return {
                ...state,
                loadingDetails: false,
                detailsError: action.payload
            };
        default:
            return state;
    }
};
