import { put, takeLatest } from 'redux-saga/effects';

import { matchPath } from 'react-router-dom';
import { routes } from '../routes';
import { fetchDetails } from '../Details/store/Details/details.actions';
import { fetchMovies, clearMovies } from '../Home/store/Movies/movies.actions';
import { LOCATION_CHANGE } from 'connected-react-router';

export function* locationChangeSaga({
    payload: {
        location: { pathname }
    }
}) {
    const detailsMatch = matchPath(pathname, routes.DETAILS);
    const homeMatch = matchPath(pathname, { path: routes.HOME, exact: true });
    const searchMatch = matchPath(pathname, routes.SEARCH);

    if (detailsMatch) {
        yield put(fetchDetails(detailsMatch.params.id));
    }

    if (searchMatch) {
        yield put(
            fetchMovies({
                search: searchMatch.params.searchQuery,
                searchBy: searchMatch.params.searchBy
            })
        );
    }

    if (homeMatch) {
        yield put(clearMovies());
    }
}

export function* watchLocationChange() {
    yield takeLatest(LOCATION_CHANGE, locationChangeSaga);
}
