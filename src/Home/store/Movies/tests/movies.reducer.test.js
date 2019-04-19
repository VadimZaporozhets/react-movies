import { movies as reducer, defaultState } from '../movies.reducer';
import { withMoviesFeatureLabel } from '../movies.feature';
import {
    FETCH_MOVIES,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR
} from '../movies.actions';

describe('Movies reducer', () => {
    it('should return the initial state', function() {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });

    it('should handle FETCH_MOVIES', function() {
        expect(
            reducer(defaultState, {
                type: withMoviesFeatureLabel(FETCH_MOVIES)
            })
        ).toEqual({
            data: [],
            loading: true,
            error: '',
            total: 0
        });
    });

    it('should handle FETCH_MOVIES_SUCCESS', function() {
        expect(
            reducer(defaultState, {
                type: withMoviesFeatureLabel(FETCH_MOVIES_SUCCESS),
                payload: {
                    data: expect.any(Array),
                    total: 10
                }
            })
        ).toEqual({
            data: expect.any(Array),
            loading: false,
            error: '',
            total: 10
        });
    });

    it('should handle FETCH_MOVIES_ERROR', function() {
        expect(
            reducer(defaultState, {
                type: withMoviesFeatureLabel(FETCH_MOVIES_ERROR),
                payload: 'error'
            })
        ).toEqual({
            data: [],
            loading: false,
            error: 'error',
            total: 0
        });
    });
});
