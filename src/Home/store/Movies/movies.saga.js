import { put, takeLatest, call } from 'redux-saga/effects';
import { movieService } from '../../../api/Movies/movies-api';
import {
    fetchMoviesError,
    fetchMoviesSuccess,
    FETCH_MOVIES
} from './movies.actions';
import { withMoviesFeatureLabel } from './movies.feature';

export function* fetchMoviesSaga({ payload }) {
    try {
        const { data } = yield call(movieService.getMovies, payload);
        yield put(fetchMoviesSuccess(data));
    } catch (e) {
        yield put(fetchMoviesError(e.message));
    }
}

export function* watchFetchMoviesSaga() {
    yield takeLatest(withMoviesFeatureLabel(FETCH_MOVIES), fetchMoviesSaga);
}
