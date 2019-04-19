import { all } from 'redux-saga/effects';
import { watchFetchMoviesSaga } from '../Home/store/Movies/movies.saga';
import { watchFetchDetailsSaga } from '../Details/store/Details/details.saga';
import { watchFetchSimilarMoviesSaga } from '../Details/store/Details/details.saga';

export function* rootSaga() {
    yield all([
        watchFetchMoviesSaga(),
        watchFetchDetailsSaga(),
        watchFetchSimilarMoviesSaga()
    ]);
}
