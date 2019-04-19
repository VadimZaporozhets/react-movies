import { fetchDetailsSaga, fetchSimilarMoviesSaga } from '../details.saga';
import { put, call } from 'redux-saga/effects';
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
