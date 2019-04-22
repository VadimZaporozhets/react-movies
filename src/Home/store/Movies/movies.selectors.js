import { createSelector } from 'reselect';

import { SORT_PARAMS } from '../../../constants';
import { formatMovies } from '../../Home.formatter';

const sortByReleaseDate = (firstMovie, secondMovie) => {
    const firstMovieReleaseDate = new Date(firstMovie.release_date);
    const secondMovieReleaseDate = new Date(secondMovie.release_date);
    return secondMovieReleaseDate - firstMovieReleaseDate;
};

const sortByRating = (firstMovie, secondMovie) =>
    secondMovie.vote_average - firstMovie.vote_average;

const getMovies = state => state.movies;

const getSortParam = (state, sortParam) => sortParam;

export const selectMovies = createSelector(
    getMovies,
    getSortParam,
    ({ data }, sortParam) => {
        let sortedMovies;

        if (sortParam === SORT_PARAMS.releaseDate) {
            sortedMovies = data.sort(sortByReleaseDate);
        } else if (sortParam === SORT_PARAMS.rating) {
            sortedMovies = data.sort(sortByRating);
        }

        return formatMovies(sortedMovies);
    }
);

export const selectMoviesLoading = createSelector(
    getMovies,
    ({ loading }) => loading
);

export const selectMoviesFetchError = createSelector(
    getMovies,
    ({ error }) => error
);

export const selectMoviesTotal = createSelector(
    getMovies,
    ({ total }) => total
);
