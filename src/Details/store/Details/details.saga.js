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
import { DetailsFeature } from './details.feature';
import { SEARCH_BY_PARAMS } from '../../../constants';

export function* fetchDetailsSaga({ payload }) {
    try {
        const { data } = yield call(movieService.getMovieById, payload);
        yield put(fetchDetailsSuccess(data));

        const genre = data.genres[0] || 'Drama';

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
    yield takeLatest(
        DetailsFeature.withDetailsFeatureLabel(FETCH_DETAILS),
        fetchDetailsSaga
    );
}

export function* fetchSimilarMoviesSaga({ payload }) {
    try {
        const similarMovies = yield call(movieService.getMovies, payload);
        yield put(fetchSimilarMoviesSuccess(similarMovies.data.data));
    } catch (e) {
        yield put(fetchSimilarMoviesError(e.message));
    }
}

export function* watchFetchSimilarMoviesSaga() {
    yield takeLatest(
        DetailsFeature.withDetailsFeatureLabel(FETCH_SIMILAR_MOVIES),
        fetchSimilarMoviesSaga
    );
}
