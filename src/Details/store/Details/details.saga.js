import { put, takeLatest, call } from 'redux-saga/effects';
import { movieService } from '../../../api/Movies/movies-api';
import {
    fetchDetailsSuccess,
    fetchDetailsError,
    FETCH_DETAILS,
    fetchSimilarMovies,
    fetchSimilarMoviesSuccess,
    fetchSimilarMoviesError,
    FETCH_SIMILAR_MOVIES
} from './details.actions';
import { withDetailsFeatureLabel } from './details.feature';
import { SEARCH_BY_PARAMS } from '../../../constants';

export function* fetchDetailsSaga(action) {
    try {
        const detailsObj = yield call(
            movieService.getMovieById,
            action.payload
        );
        yield put(fetchDetailsSuccess(detailsObj.data));

        const genre = detailsObj.data.genres[0] || 'Drama';

        yield put(
            fetchSimilarMovies({
                search: genre,
                searchBy: SEARCH_BY_PARAMS.genre
            })
        );
    } catch (e) {
        yield put(fetchDetailsError(e.message));
    }
}

export function* watchFetchDetailsSaga() {
    yield takeLatest(withDetailsFeatureLabel(FETCH_DETAILS), fetchDetailsSaga);
}

export function* fetchSimilarMoviesSaga(action) {
    try {
        const similarMovies = yield call(
            movieService.getMovies,
            action.payload
        );
        yield put(fetchSimilarMoviesSuccess(similarMovies.data.data));
    } catch (e) {
        yield put(fetchSimilarMoviesError(e.message));
    }
}

export function* watchFetchSimilarMoviesSaga() {
    yield takeLatest(
        withDetailsFeatureLabel(FETCH_SIMILAR_MOVIES),
        fetchSimilarMoviesSaga
    );
}
