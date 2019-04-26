import { put, takeLatest, call } from 'redux-saga/effects';
import { movieService } from '../../../api/Movies/movies-api';
import {
    fetchMovies,
    fetchMoviesError,
    fetchMoviesSuccess
} from './movies.actions';

export function* fetchMoviesSaga({ payload }) {
    try {
        const { data } = yield call(movieService.getMovies, payload);
        yield put(fetchMoviesSuccess(data));
    } catch (e) {
        yield put(fetchMoviesError(e.message));
    }
}

export function* watchFetchMoviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMoviesSaga);
}
