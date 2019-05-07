import {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMoviesError,
    clearMovies
} from './movies.actions';

export const initialState = {
    data: [],
    loading: false,
    error: '',
    total: 0
};

export const movies = (state = initialState, action) => {
    if (fetchMovies.is(action)) {
        return {
            ...state,
            data: [],
            loading: true,
            error: '',
            total: 0
        };
    }

    if (fetchMoviesSuccess.is(action)) {
        return {
            ...state,
            data: action.payload.data,
            loading: false,
            total: action.payload.total
        };
    }

    if (fetchMoviesError.is(action)) {
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    }

    if (clearMovies.is(action)) {
        return {
            ...state,
            data: initialState.data
        };
    }

    return state;
};
