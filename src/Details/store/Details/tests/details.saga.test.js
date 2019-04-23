import { put, call } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';

import {
    locationChangeSaga,
    fetchDetailsSaga,
    fetchSimilarMoviesSaga
} from '../details.saga';
import {
    fetchDetails,
    fetchDetailsSuccess,
    fetchDetailsError,
    fetchSimilarMovies,
    fetchSimilarMoviesError,
    fetchSimilarMoviesSuccess
} from '../details.actions';
import { movieService } from '../../../../api/Movies/movies-api';

describe('fetchDetailsSaga', () => {
    it('should fetch details, call fetchDetailsSuccess and fetchSimilarMovies action', () => {
        const gen = fetchDetailsSaga(fetchDetails(123));
        const responseObj = { data: { genres: ['Drama'] } };

        expect(gen.next().value).toEqual(call(movieService.getMovieById, 123));
        expect(gen.next(responseObj).value).toEqual(
            put(fetchDetailsSuccess({ genres: ['Drama'] }))
        );
        expect(gen.next().value).toEqual(
            put(
                fetchSimilarMovies({
                    search: 'Drama',
                    searchBy: 'genres'
                })
            )
        );
        expect(gen.next().done).toBeTruthy();
    });

    it('should call fetchDetailsError on error', () => {
        const gen = fetchDetailsSaga(fetchDetails(123));
        const responseError = new Error('error');

        expect(gen.next().value).toEqual(call(movieService.getMovieById, 123));
        expect(gen.throw(responseError).value).toEqual(
            put(fetchDetailsError(responseError.message))
        );
        expect(gen.next().done).toBeTruthy();
    });
});

describe('fetchSimilarMoviesSaga', () => {
    it('should fetch details, call fetchDetailsSuccess and fetchSimilarMovies action', () => {
        const gen = fetchSimilarMoviesSaga(
            fetchSimilarMovies({
                search: 'Drama',
                searchBy: 'genres'
            })
        );
        const responseObj = { data: { data: {} } };

        expect(gen.next().value).toEqual(
            call(movieService.getMovies, {
                search: 'Drama',
                searchBy: 'genres'
            })
        );
        expect(gen.next(responseObj).value).toEqual(
            put(fetchSimilarMoviesSuccess({}))
        );
        expect(gen.next().done).toBeTruthy();
    });

    it('should call fetchDetailsError on error', () => {
        const gen = fetchSimilarMoviesSaga(
            fetchSimilarMovies({
                search: 'Drama',
                searchBy: 'genres'
            })
        );
        const responseError = new Error('error');

        expect(gen.next().value).toEqual(
            call(movieService.getMovies, {
                search: 'Drama',
                searchBy: 'genres'
            })
        );
        expect(gen.throw(responseError).value).toEqual(
            put(fetchSimilarMoviesError(responseError.message))
        );
        expect(gen.next().done).toBeTruthy();
    });
});

describe('locationChangeSaga', () => {
    it('should dispatch details fetch on details route match', function() {
        const gen = locationChangeSaga({
            type: LOCATION_CHANGE,
            payload: {
                location: {
                    pathname: '/details/509885'
                }
            }
        });

        expect(gen.next().value).toEqual(put(fetchDetails('509885')));
        expect(gen.next().done).toBeTruthy();
    });

    it('should not dispatch anything if details route does not match', function() {
        const gen = locationChangeSaga({
            type: LOCATION_CHANGE,
            payload: {
                location: {
                    pathname: '/'
                }
            }
        });

        const {value, done} = gen.next();

        expect(value).toBeUndefined();
        expect(done).toBeTruthy();
    });
});
