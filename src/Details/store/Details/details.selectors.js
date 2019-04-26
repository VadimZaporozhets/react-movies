import { createSelector } from 'reselect';

import { MoviesFeature } from '../../../Home/store/Movies/movies.feature';
import { DetailsFeature } from './details.feature';

const getMovieDetails = state => state[DetailsFeature.name];
const getMovies = state => state[MoviesFeature.name];

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
