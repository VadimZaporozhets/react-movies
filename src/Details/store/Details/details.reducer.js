import {
    fetchDetails,
    fetchDetailsSuccess,
    fetchDetailsError
} from './details.actions';

export const initialState = {
    data: {},
    loadingDetails: false,
    detailsError: ''
};

export const movieDetails = (state = initialState, action) => {
    if (fetchDetails.is(action)) {
        return {
            ...state,
            data: {},
            loadingDetails: true,
            detailsError: ''
        };
    }

    if (fetchDetailsSuccess.is(action)) {
        return {
            ...state,
            data: action.payload,
            loadingDetails: false
        };
    }

    if (fetchDetailsError.is(action)) {
        return {
            ...state,
            loadingDetails: false,
            detailsError: action.payload
        };
    }

    return state;
};
