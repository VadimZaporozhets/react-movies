import { expectSaga } from 'redux-saga-test-plan';

import { locationChangeSaga } from './router.saga';
import { LOCATION_CHANGE } from 'connected-react-router';
import { fetchDetails } from '../Details/store/Details/details.actions';
import { fetchMovies } from '../Home/store/Movies/movies.actions';

describe('locationChangeSaga', () => {
    it('should dispatch details fetch on details route match', () => {
        return expectSaga(locationChangeSaga, {
            type: LOCATION_CHANGE,
            payload: {
                location: {
                    pathname: '/details/509885'
                }
            }
        })
            .put(fetchDetails('509885'))
            .run();
    });

    it('should dispatch movies fetch on home route match', () => {
        return expectSaga(locationChangeSaga, {
            type: LOCATION_CHANGE,
            payload: {
                location: {
                    pathname: '/'
                }
            }
        })
            .put(fetchMovies())
            .run();
    });

    it('should not dispatch anything if details route does not match', () => {
        return expectSaga(locationChangeSaga, {
            type: LOCATION_CHANGE,
            payload: {
                location: {
                    pathname: '/wrong-path'
                }
            }
        })
            .run()
            .then(({ effects: { put } }) => {
                expect(put).toBeUndefined();
            });
    });
});
