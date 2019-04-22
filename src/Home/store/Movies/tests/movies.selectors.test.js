import {
    selectMovies,
    selectMoviesTotal,
    selectMoviesFetchError,
    selectMoviesLoading
} from '../movies.selectors';

const initializeStore = () => ({
    movies: {
        data: expect.any(Array),
        loading: true,
        error: 'error',
        total: 10
    }
});

describe('selectMovies', () => {
    it('should derive movies array from state', () => {
        const store = initializeStore();

        expect(selectMovies(store)).toEqual(expect.any(Array));
    });
});

describe('selectMoviesTotal', () => {
    it('should derive total number from state', function() {
        const store = initializeStore();

        expect(selectMoviesTotal(store)).toEqual(10);
    });
});

describe('selectMoviesFetchError', () => {
    it('should derive error from state', function() {
        const store = initializeStore();

        expect(selectMoviesFetchError(store)).toEqual('error');
    });
});

describe('selectMoviesLoading', () => {
    it('should derive loading flag from state', function() {
        const store = initializeStore();

        expect(selectMoviesLoading(store)).toBeTruthy();
    });
});
