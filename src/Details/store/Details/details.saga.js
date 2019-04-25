import { put, takeLatest, call } from 'redux-saga/effects';

import { movieService } from '../../../api/Movies/movies-api';
import {
    fetchDetailsSuccess,
    fetchDetailsError,
    FETCH_DETAILS
} from './details.actions';
import { DetailsFeature } from './details.feature';
import { SEARCH_BY_PARAMS } from '../../../constants';
import { fetchMovies } from '../../../Home/store/Movies/movies.actions';

export function* fetchDetailsSaga({ payload }) {
    try {
        const { data } = yield call(movieService.getMovieById, payload);
        yield put(fetchDetailsSuccess(data));

        const genre = data.genres[0];

        yield put(
            fetchMovies({
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
