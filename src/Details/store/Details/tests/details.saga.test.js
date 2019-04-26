import { call } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import { fetchDetailsSaga } from '../details.saga';
import {
    fetchDetails,
    fetchDetailsSuccess,
    fetchDetailsError
} from '../details.actions';
import { fetchMovies } from '../../../../Home/store/Movies/movies.actions';
import { movieService } from '../../../../api/Movies/movies-api';

describe('fetchDetailsSaga', () => {
    it('should fetch details, call fetchDetailsSuccess and fetchSimilarMovies action', () => {
        const responseObj = { data: { genres: ['Drama'] } };

        return expectSaga(fetchDetailsSaga, fetchDetails(123))
            .provide([[call(movieService.getMovieById, 123), responseObj]])
            .put(fetchDetailsSuccess({ genres: ['Drama'] }))
            .put(fetchMovies({ search: 'Drama', searchBy: 'genres' }))
            .run();
    });

    it('should call fetchDetailsError on error', () => {
        const responseError = new Error('error');

        return expectSaga(fetchDetailsSaga, fetchDetails(123))
            .provide([
                [
                    call(movieService.getMovieById, 123),
                    throwError(responseError)
                ]
            ])
            .put(fetchDetailsError(responseError.message))
            .run();
    });
});
