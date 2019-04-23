import { movies as reducer, initialState } from '../movies.reducer';
import { MoviesFeature } from '../movies.feature';
import {
    FETCH_MOVIES,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR
} from '../movies.actions';

describe('Movies reducer', () => {
    it('should return the initial state', function() {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should set loading to true on fetch start', function() {
        expect(
            reducer(initialState, {
                type: MoviesFeature.withMoviesFeatureLabel(FETCH_MOVIES)
            })
        ).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('should set movies array and total after fetch success', function() {
        expect(
            reducer(initialState, {
                type: MoviesFeature.withMoviesFeatureLabel(FETCH_MOVIES_SUCCESS),
                payload: {
                    data: expect.any(Array),
                    total: 10
                }
            })
        ).toEqual({
            ...initialState,
            data: expect.any(Array),
            total: 10
        });
    });

    it('should set error on fetch fail', function() {
        expect(
            reducer(initialState, {
                type: MoviesFeature.withMoviesFeatureLabel(FETCH_MOVIES_ERROR),
                payload: 'error'
            })
        ).toEqual({
            ...initialState,
            error: 'error'
        });
    });
});
