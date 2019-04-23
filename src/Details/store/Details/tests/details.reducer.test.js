import { movieDetails as reducer, initialState } from '../details.reducer';
import { DetailsFeature } from '../details.feature';
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
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should set details loader to true on fetch start', function() {
        expect(
            reducer(initialState, {
                type: DetailsFeature.withDetailsFeatureLabel(FETCH_DETAILS)
            })
        ).toEqual({
            ...initialState,
            loadingDetails: true
        });
    });

    it('should set details on details fetch success', function() {
        expect(
            reducer(initialState, {
                type: DetailsFeature.withDetailsFeatureLabel(
                    FETCH_DETAILS_SUCCESS
                ),
                payload: expect.any(Object)
            })
        ).toEqual({
            ...initialState,
            data: expect.any(Object)
        });
    });

    it('should set details error on details fetch error', function() {
        expect(
            reducer(initialState, {
                type: DetailsFeature.withDetailsFeatureLabel(
                    FETCH_DETAILS_ERROR
                ),
                payload: 'error'
            })
        ).toEqual({
            ...initialState,
            detailsError: 'error'
        });
    });

    it('should set loading movies to true on movies fetch start', function() {
        expect(
            reducer(initialState, {
                type: DetailsFeature.withDetailsFeatureLabel(
                    FETCH_SIMILAR_MOVIES
                )
            })
        ).toEqual({
            ...initialState,
            loadingMovies: true
        });
    });

    it('should set similar movies array on fetch movies success', function() {
        expect(
            reducer(initialState, {
                type: DetailsFeature.withDetailsFeatureLabel(
                    FETCH_SIMILAR_MOVIES_SUCCESS
                ),
                payload: expect.any(Array)
            })
        ).toEqual({
            ...initialState,
            similarMovies: expect.any(Array)
        });
    });

    it('should set movies error on fetch movies error', function() {
        expect(
            reducer(initialState, {
                type: DetailsFeature.withDetailsFeatureLabel(
                    FETCH_SIMILAR_MOVIES_ERROR
                ),
                payload: 'error'
            })
        ).toEqual({
            ...initialState,
            similarMoviesError: 'error'
        });
    });
});
