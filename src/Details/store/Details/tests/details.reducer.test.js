import { movieDetails as reducer, initialState } from '../details.reducer';
import { DetailsFeature } from '../details.feature';
import {
    FETCH_DETAILS_SUCCESS,
    FETCH_DETAILS_ERROR,
    FETCH_DETAILS
} from '../details.actions';

describe('Details reducer', () => {
    it('should return the initial state', () => {
        const actualState = reducer(undefined, {});
        expect(actualState).toEqual(initialState);
    });

    it('should set details loader to true on fetch start', () => {
        const actualState = reducer(initialState, {
            type: DetailsFeature.withDetailsFeatureLabel(FETCH_DETAILS)
        });

        const expectedState = {
            ...initialState,
            loadingDetails: true
        };

        expect(actualState).toEqual(expectedState);
    });

    it('should set details on details fetch success', () => {
        const actualState = reducer(initialState, {
            type: DetailsFeature.withDetailsFeatureLabel(FETCH_DETAILS_SUCCESS),
            payload: expect.any(Object)
        });

        const expectedState = {
            ...initialState,
            data: expect.any(Object)
        };

        expect(actualState).toEqual(expectedState);
    });

    it('should set details error on details fetch error', () => {
        const actualState = reducer(initialState, {
            type: DetailsFeature.withDetailsFeatureLabel(FETCH_DETAILS_ERROR),
            payload: 'error'
        });

        const expectedState = {
            ...initialState,
            detailsError: 'error'
        };

        expect(actualState).toEqual(expectedState);
    });
});
