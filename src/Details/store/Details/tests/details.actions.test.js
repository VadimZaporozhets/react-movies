import {
    fetchDetails,
    fetchDetailsError,
    fetchDetailsSuccess,
    fetchSimilarMovies,
    fetchSimilarMoviesSuccess,
    fetchSimilarMoviesError
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

describe('fetchSimilarMovies', () => {
    it('should return fetchSimilarMovies action creator', () => {
        const expectedObj = {
            type: '@MovieDetails/FETCH_SIMILAR_MOVIES',
            payload: expect.any(Object)
        };

        expect(fetchSimilarMovies({})).toEqual(expectedObj);
    });
});

describe('fetchSimilarMoviesSuccess', () => {
    it('should return fetchSimilarMoviesSuccess action creator', () => {
        const expectedObj = {
            type: '@MovieDetails/FETCH_SIMILAR_MOVIES_SUCCESS',
            payload: expect.any(Object)
        };

        expect(fetchSimilarMoviesSuccess({})).toEqual(expectedObj);
    });
});

describe('fetchSimilarMoviesError', () => {
    it('should return fetchSimilarMoviesError action creator', () => {
        const expectedObj = {
            type: '@MovieDetails/FETCH_SIMILAR_MOVIES_ERROR',
            payload: 'error'
        };

        expect(fetchSimilarMoviesError('error')).toEqual(expectedObj);
    });
});
