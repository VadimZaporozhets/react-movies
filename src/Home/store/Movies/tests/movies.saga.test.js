import { fetchMoviesSaga } from '../movies.saga';
import { put, call } from 'redux-saga/effects';
import { movieService } from '../../../../api/Movies/movies-api';
import {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMoviesError
} from '../movies.actions';

describe('fetchMoviesSaga', () => {
    it('should fetchMovies and call fetchMoviesSuccess action', () => {
        const gen = fetchMoviesSaga(fetchMovies({}));
        const responseObj = { data: {} };

        expect(gen.next().value).toEqual(call(movieService.getMovies, {}));
        expect(gen.next(responseObj).value).toEqual(
            put(fetchMoviesSuccess({}))
        );
        expect(gen.next().done).toBeTruthy();
    });

    it('should call fetchMoviesError on error', function() {
        const gen = fetchMoviesSaga(fetchMovies({}));
        const responseError = new Error('error');

        expect(gen.next().value).toEqual(call(movieService.getMovies, {}));
        expect(gen.throw(responseError).value).toEqual(
            put(fetchMoviesError(responseError.message))
        );
        expect(gen.next().done).toBeTruthy();
    });
});
