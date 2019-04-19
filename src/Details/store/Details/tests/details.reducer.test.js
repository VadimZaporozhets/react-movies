import { movieDetails as reducer, defaultState } from '../details.reducer';
import { withDetailsFeatureLabel } from '../details.feature';
import {
    FETCH_SIMILAR_MOVIES,
    FETCH_SIMILAR_MOVIES_ERROR,
    FETCH_SIMILAR_MOVIES_SUCCESS,
    FETCH_DETAILS_SUCCESS,
    FETCH_DETAILS_ERROR,
    FETCH_DETAILS
} from '../details.actions';

describe('Details reducer', () => {
    it('should return the initial state', function() {
        expect(reducer(undefined, {})).toEqual(defaultState);
    });

    it('should handle FETCH_DETAILS', function() {
        expect(
            reducer(defaultState, {
                type: withDetailsFeatureLabel(FETCH_DETAILS)
            })
        ).toEqual({
            data: {},
            loadingDetails: true,
            loadingMovies: false,
            error: '',
            similarMovies: []
        });
    });

    it('should handle FETCH_DETAILS_SUCCESS', function() {
        expect(
            reducer(defaultState, {
                type: withDetailsFeatureLabel(FETCH_DETAILS_SUCCESS),
                payload: expect.any(Object)
            })
        ).toEqual({
            data: expect.any(Object),
            loadingDetails: false,
            loadingMovies: false,
            error: '',
            similarMovies: []
        });
    });

    it('should handle FETCH_DETAILS_ERROR', function() {
        expect(
            reducer(defaultState, {
                type: withDetailsFeatureLabel(FETCH_DETAILS_ERROR),
                payload: 'error'
            })
        ).toEqual({
            data: {},
            loadingDetails: false,
            loadingMovies: false,
            error: 'error',
            similarMovies: []
        });
    });

    it('should handle FETCH_SIMILAR_MOVIES', function() {
        expect(
            reducer(defaultState, {
                type: withDetailsFeatureLabel(FETCH_SIMILAR_MOVIES)
            })
        ).toEqual({
            data: expect.any(Object),
            loadingDetails: expect.any(Boolean),
            loadingMovies: true,
            error: '',
            similarMovies: []
        });
    });

    it('should handle FETCH_SIMILAR_MOVIES_SUCCESS', function() {
        expect(
            reducer(defaultState, {
                type: withDetailsFeatureLabel(FETCH_SIMILAR_MOVIES_SUCCESS),
                payload: expect.any(Array)
            })
        ).toEqual({
            data: expect.any(Object),
            loadingDetails: expect.any(Boolean),
            loadingMovies: false,
            error: '',
            similarMovies: expect.any(Array)
        });
    });

    it('should handle FETCH_SIMILAR_MOVIES_ERROR', function() {
        expect(
            reducer(defaultState, {
                type: withDetailsFeatureLabel(FETCH_SIMILAR_MOVIES_ERROR),
                payload: 'error'
            })
        ).toEqual({
            loadingDetails: false,
            loadingMovies: false,
            error: 'error',
            data: {},
            similarMovies: []
        });
    });
});
