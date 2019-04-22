import { createSelector } from 'reselect';

const getMovieDetails = state => state.movieDetails;

export const selectDetails = createSelector(
    getMovieDetails,
    ({ data }) => data
);

export const selectLoadingDetails = createSelector(
    getMovieDetails,
    ({ loadingDetails }) => loadingDetails
);

export const selectLoadingMovies = createSelector(
    getMovieDetails,
    ({ loadingMovies }) => loadingMovies
);

export const selectDetailsError = createSelector(
    getMovieDetails,
    ({ detailsError }) => detailsError
);

export const selectSimilarMoviesError = createSelector(
    getMovieDetails,
    ({ similarMoviesError }) => similarMoviesError
);

export const selectSimilarMovies = createSelector(
    getMovieDetails,
    ({ similarMovies }) => similarMovies
);
