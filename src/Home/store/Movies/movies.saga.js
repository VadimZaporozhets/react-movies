import { put, takeLatest, call } from 'redux-saga/effects';
import { matchPath } from 'react-router-dom';
import { push } from 'connected-react-router';

import { movieService } from '../../../api/Movies/movies-api';
import {
    clearMovies,
    fetchMovies,
    fetchMoviesError,
    fetchMoviesSuccess,
    loadInitialMovies,
    searchMovies
} from './movies.actions';
import { routesPaths } from '../../../routes';
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
    const searchMatch = matchPath(pathname, routesPaths.SEARCH);
    const homeMatch = matchPath(pathname, {
        path: routesPaths.HOME,
        exact: true
    });
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

export function* loadInitialMoviesSaga({ payload }) {
    try {
        const { url } = payload;
        const searchMatch = matchPath(url, routesPaths.SEARCH);
        const homeMatch = matchPath(url, {
            path: routesPaths.HOME,
            exact: true
        });
        let search;
        let searchBy = SEARCH_BY_PARAMS.title;

        if (homeMatch) {
            put(clearMovies());
            return;
        }

        if (searchMatch) {
            search = searchMatch.params.searchQuery;
            searchBy = searchMatch.params.searchBy;
        }

        if (search) {
            const { data } = yield call(movieService.getMovies, {
                search,
                searchBy
            });

            yield put(fetchMoviesSuccess(data));
        }
    } catch (e) {
        yield put(fetchMoviesError(e));
    }
}

export function* watchLoadInitialMoviesSaga() {
    yield takeLatest(loadInitialMovies.type, loadInitialMoviesSaga);
}
