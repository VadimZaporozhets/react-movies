import { createSelector } from 'reselect';

const getMovieDetails = state => state.movieDetails;
const getMovies = state => state.movies;

export const selectDetails = createSelector(
    getMovieDetails,
    ({ data }) => data
);

export const selectLoadingDetails = createSelector(
    getMovieDetails,
    ({ loadingDetails }) => loadingDetails
);

export const selectLoadingMovies = createSelector(
    getMovies,
    ({ loading }) => loading
);

export const selectDetailsError = createSelector(
    getMovieDetails,
    ({ detailsError }) => detailsError
);

export const selectSimilarMoviesError = createSelector(
    getMovies,
    ({ error }) => error
);

export const selectSimilarMovies = createSelector(
    getMovies,
    ({ data }) => data
);
