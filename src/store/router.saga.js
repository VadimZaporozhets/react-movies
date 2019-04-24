import { put, takeLatest } from 'redux-saga/effects';

import { matchPath } from 'react-router-dom';
import { routes } from '../routes';
import { fetchDetails } from '../Details/store/Details/details.actions';
import { LOCATION_CHANGE } from 'connected-react-router';

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
