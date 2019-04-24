import { put } from 'redux-saga/effects';

import { locationChangeSaga } from './router.saga';
import { LOCATION_CHANGE } from 'connected-react-router';
import { fetchDetails } from '../Details/store/Details/details.actions';

describe('locationChangeSaga', () => {
    it('should dispatch details fetch on details route match', function() {
        const gen = locationChangeSaga({
            type: LOCATION_CHANGE,
            payload: {
                location: {
                    pathname: '/details/509885'
                }
            }
        });

        expect(gen.next().value).toEqual(put(fetchDetails('509885')));
        expect(gen.next().done).toBeTruthy();
    });

    it('should not dispatch anything if details route does not match', function() {
        const gen = locationChangeSaga({
            type: LOCATION_CHANGE,
            payload: {
                location: {
                    pathname: '/'
                }
            }
        });

        const { value, done } = gen.next();

        expect(value).toBeUndefined();
        expect(done).toBeTruthy();
    });
});
