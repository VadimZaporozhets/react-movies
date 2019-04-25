import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import { call } from 'redux-saga/effects';

import { fetchMoviesSaga } from '../movies.saga';
import { movieService } from '../../../../api/Movies/movies-api';
import {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMoviesError
} from '../movies.actions';

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
});
