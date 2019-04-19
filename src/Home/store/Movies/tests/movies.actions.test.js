import {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMoviesError
} from '../movies.actions';

describe('fetchMovies', () => {
    it('should return fetchMovies action creator', () => {
        const expectedObj = {
            type: '@Movies/FETCH_MOVIES',
            payload: expect.any(Object)
        };

        expect(fetchMovies({})).toEqual(expectedObj);
    });
});

describe('fetchMoviesSuccess', () => {
    it('should return fetchMoviesSuccess action creator', () => {
        const expectedObj = {
            type: '@Movies/FETCH_MOVIES_SUCCESS',
            payload: expect.any(Object)
        };

        expect(fetchMoviesSuccess({})).toEqual(expectedObj);
    });
});

describe('fetchMoviesError', () => {
    it('should return fetchMoviesError action creator', () => {
        const expectedObj = {
            type: '@Movies/FETCH_MOVIES_ERROR',
            payload: 'error'
        };

        expect(fetchMoviesError('error')).toEqual(expectedObj);
    });
});
