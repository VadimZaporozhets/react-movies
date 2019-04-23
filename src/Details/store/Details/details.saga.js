import { put, takeLatest, call } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import { matchPath } from 'react-router-dom';

import { movieService } from '../../../api/Movies/movies-api';
import {
    fetchDetailsSuccess,
    fetchDetailsError,
    FETCH_DETAILS,
    fetchSimilarMovies,
    fetchDetails,
    fetchSimilarMoviesSuccess,
    fetchSimilarMoviesError,
    FETCH_SIMILAR_MOVIES
} from './details.actions';
import { DetailsFeature } from './details.feature';
import { SEARCH_BY_PARAMS } from '../../../constants';
import { routes } from '../../../routes';

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

export function* locationChangeSaga({
    payload: {
        location: { pathname }
    }
}) {
    const match = matchPath(pathname, routes.DETAILS);

    if (match) {
        yield put(fetchDetails(match.params.id));
    }
}

export function* watchLocationChange() {
    yield takeLatest(LOCATION_CHANGE, locationChangeSaga);
}
