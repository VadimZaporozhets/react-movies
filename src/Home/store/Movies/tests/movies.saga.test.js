import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { fetchMoviesSaga } from '../movies.saga';
import { movieService } from '../../../../api/Movies/movies-api';
import {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMoviesError,
    clearMovies,
    searchMovies
} from '../movies.actions';
import { searchMoviesSaga } from '../movies.saga';

describe('fetchMoviesSaga', () => {
    it('should fetchMovies and call fetchMoviesSuccess action', () => {
        const responseObj = { data: {} };

        return expectSaga(fetchMoviesSaga, fetchMovies({}))
            .provide([[call(movieService.getMovies, {}), responseObj]])
            .put(fetchMoviesSuccess({}))
            .run();
    });

    it('should call fetchMoviesError on error', () => {
        const responseError = new Error('error');

        return expectSaga(fetchMoviesSaga, fetchMovies({}))
            .provide([
                [call(movieService.getMovies, {}), throwError(responseError)]
            ])
            .put(fetchMoviesError(responseError.message))
            .run();
    });

    it('should dispatch clear movies action on home route match', () => {
        return expectSaga(searchMoviesSaga, searchMovies({ pathname: '/' }))
            .put(clearMovies())
            .run();
    });

    it('should clear movies and fetch movies on search route match', () => {
        const searchQuery = 'express';
        const searchBy = 'title';

        return expectSaga(
            searchMoviesSaga,
            searchMovies({
                pathname: `/search/${searchQuery}/${searchBy}`
            })
        )
            .put(push(`/search/${searchQuery}/${searchBy}`))
            .put(fetchMovies({ search: searchQuery, searchBy }))
            .run();
    });

    it('should clear movies and fetch movies if search query and search by parameter provided', () => {
        const searchQuery = 'express';
        const searchBy = 'title';

        return expectSaga(
            searchMoviesSaga,
            searchMovies({
                searchQuery,
                searchBy,
                pathname: '/'
            })
        )
            .put(clearMovies())
            .put(push(`/search/${searchQuery}/${searchBy}`))
            .put(fetchMovies({ search: searchQuery, searchBy }))
            .run();
    });
});
