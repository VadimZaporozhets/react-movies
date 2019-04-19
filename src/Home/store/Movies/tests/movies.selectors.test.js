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
    it('should return movies array', function() {
        const store = initializeStore();

        expect(selectMovies(store)).toEqual(expect.any(Array));
    });
});

describe('selectMoviesTotal', () => {
    it('should return total number', function() {
        const store = initializeStore();

        expect(selectMoviesTotal(store)).toEqual(10);
    });
});

describe('selectMoviesFetchError', () => {
    it('should return error string', function() {
        const store = initializeStore();

        expect(selectMoviesFetchError(store)).toEqual('error');
    });
});

describe('selectMoviesLoading', () => {
    it('should return loading boolean', function() {
        const store = initializeStore();

        expect(selectMoviesLoading(store)).toBeTruthy();
    });
});
