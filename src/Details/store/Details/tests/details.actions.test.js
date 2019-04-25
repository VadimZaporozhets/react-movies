import {
    fetchDetails,
    fetchDetailsError,
    fetchDetailsSuccess
} from '../details.actions';

describe('fetchDetails', () => {
    it('should return fetchMovies action creator', () => {
        const expectedObj = {
            type: '@MovieDetails/FETCH_DETAILS',
            payload: expect.any(Object)
        };

        expect(fetchDetails({})).toEqual(expectedObj);
    });
});

describe('fetchDetailsSuccess', () => {
    it('should return fetchDetailsSuccess action creator', () => {
        const expectedObj = {
            type: '@MovieDetails/FETCH_DETAILS_SUCCESS',
            payload: expect.any(Object)
        };

        expect(fetchDetailsSuccess({})).toEqual(expectedObj);
    });
});

describe('fetchDetailsError', () => {
    it('should return fetchDetailsError action creator', () => {
        const expectedObj = {
            type: '@MovieDetails/FETCH_DETAILS_ERROR',
            payload: 'error'
        };

        expect(fetchDetailsError('error')).toEqual(expectedObj);
    });
});
