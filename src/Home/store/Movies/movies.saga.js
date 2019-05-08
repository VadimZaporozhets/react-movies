import { put, takeLatest, call } from 'redux-saga/effects';
import { matchPath } from 'react-router-dom';
import { push } from 'connected-react-router';

import { movieService } from '../../../api/Movies/movies-api';
import {
    clearMovies,
    fetchMovies,
    fetchMoviesError,
    fetchMoviesSuccess,
    searchMovies
} from './movies.actions';
import { routes } from '../../../routes';
import { SEARCH_BY_PARAMS } from '../../../constants';
import { formatSearchRoute } from '../../Home.formatter';

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

export function* searchMoviesSaga({ payload }) {
    const { searchQuery, searchBy, pathname } = payload;
    const searchMatch = matchPath(pathname, routes.SEARCH);
    const homeMatch = matchPath(pathname, { path: routes.HOME, exact: true });
    let finalSearchQuery;
    let finalSearchBy = SEARCH_BY_PARAMS.title;

    if (homeMatch) {
        yield put(clearMovies());
    }

    if (searchMatch) {
        finalSearchQuery = searchMatch.params.searchQuery;
        finalSearchBy = searchMatch.params.searchBy;
    }

    if (searchQuery) {
        finalSearchQuery = searchQuery;
    }

    if (searchBy) {
        finalSearchBy = searchBy;
    }

    if (finalSearchQuery) {
        yield put(push(formatSearchRoute(finalSearchQuery, finalSearchBy)));
        yield put(
            fetchMovies({
                search: finalSearchQuery,
                searchBy: finalSearchBy
            })
        );
    }
}

export function* watchSearchMoviesSaga() {
    yield takeLatest(searchMovies.type, searchMoviesSaga);
}
