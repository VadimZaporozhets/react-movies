import { movies as reducer, initialState } from '../movies.reducer';
import {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMoviesError,
    clearMovies
} from '../movies.actions';

describe('Movies reducer', () => {
    it('should return the initial state', () => {
        const actualState = reducer(undefined, {});

        expect(actualState).toEqual(initialState);
    });

    it('should set loading to true on fetch start', () => {
        const actualState = reducer(initialState, fetchMovies());

        const expectedState = {
            ...initialState,
            loading: true
        };

        expect(actualState).toEqual(expectedState);
    });

    it('should set movies array and total after fetch success', () => {
        const actualState = reducer(
            initialState,
            fetchMoviesSuccess({
                data: expect.any(Array),
                total: 10
            })
        );
        const expectedState = {
            ...initialState,
            data: expect.any(Array),
            total: 10
        };

        expect(actualState).toEqual(expectedState);
    });

    it('should set error on fetch fail', () => {
        const actualState = reducer(initialState, fetchMoviesError('error'));
        const expectedState = {
            ...initialState,
            error: 'error'
        };

        expect(actualState).toEqual(expectedState);
    });

    it('should clear movies', () => {
        const moviesObj = {
            data: [expect.any(Object)]
        };
        console.log(expect.any(Object));
        const actualState = reducer(
            { ...initialState, ...moviesObj },
            clearMovies()
        );

        expect(actualState).toEqual(initialState);
    });
});
