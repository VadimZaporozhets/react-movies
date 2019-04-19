import { put, takeLatest, call } from 'redux-saga/effects';
import { movieService } from '../../../api/Movies/movies-api';
import {
    fetchMoviesError,
    fetchMoviesSuccess,
    FETCH_MOVIES
} from './movies.actions';
import { withMoviesFeatureLabel } from './movies.feature';

export function* fetchMoviesSaga(action) {
    try {
        const moviesObj = yield call(movieService.getMovies, action.payload);
        yield put(fetchMoviesSuccess(moviesObj.data));
    } catch (e) {
        yield put(fetchMoviesError(e.message));
    }
}

export function* watchFetchMoviesSaga() {
    yield takeLatest(withMoviesFeatureLabel(FETCH_MOVIES), fetchMoviesSaga);
}
