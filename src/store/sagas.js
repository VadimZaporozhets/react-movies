import { all } from 'redux-saga/effects';

import { watchFetchMoviesSaga } from '../Home/store/Movies/movies.saga';
import {
    watchFetchDetailsSaga,
    watchFetchSimilarMoviesSaga
} from '../Details/store/Details/details.saga';
import { watchLocationChange } from './router.saga';

export function* rootSaga() {
    yield all([
        watchFetchMoviesSaga(),
        watchFetchDetailsSaga(),
        watchFetchSimilarMoviesSaga(),
        watchLocationChange()
    ]);
}
