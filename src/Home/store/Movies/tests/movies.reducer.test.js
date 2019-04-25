import { movies as reducer, initialState } from '../movies.reducer';
import { MoviesFeature } from '../movies.feature';
import {
    FETCH_MOVIES,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR
} from '../movies.actions';

describe('Movies reducer', () => {
    it('should return the initial state', () => {
        const actualState = reducer(undefined, {});

        expect(actualState).toEqual(initialState);
    });

    it('should set loading to true on fetch start', () => {
        const actualState = reducer(initialState, {
            type: MoviesFeature.withMoviesFeatureLabel(FETCH_MOVIES)
        });

        const expectedState = {
            ...initialState,
            loading: true
        };

        expect(actualState).toEqual(expectedState);
    });

    it('should set movies array and total after fetch success', () => {
        const actualState = reducer(initialState, {
            type: MoviesFeature.withMoviesFeatureLabel(FETCH_MOVIES_SUCCESS),
            payload: {
                data: expect.any(Array),
                total: 10
            }
        });
        const expectedState = {
            ...initialState,
            data: expect.any(Array),
            total: 10
        };

        expect(actualState).toEqual(expectedState);
    });

    it('should set error on fetch fail', () => {
        const actualState = reducer(initialState, {
            type: MoviesFeature.withMoviesFeatureLabel(FETCH_MOVIES_ERROR),
            payload: 'error'
        });
        const expectedState = {
            ...initialState,
            error: 'error'
        };

        expect(actualState).toEqual(expectedState);
    });
});
