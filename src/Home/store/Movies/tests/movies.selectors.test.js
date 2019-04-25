import {
    selectMovies,
    selectMoviesTotal,
    selectMoviesFetchError,
    selectMoviesLoading
} from '../movies.selectors';
import { SORT_PARAMS } from '../../../../constants';

const store = {
    movies: {
        data: [],
        loading: true,
        error: 'error',
        total: 10
    }
};

describe('selectMovies', () => {
    it('should derive movies array from state', () => {
        expect(selectMovies(store, SORT_PARAMS.releaseDate)).toEqual(
            expect.any(Array)
        );
    });
});

describe('selectMoviesTotal', () => {
    it('should derive total number from state', () => {
        expect(selectMoviesTotal(store)).toEqual(10);
    });
});

describe('selectMoviesFetchError', () => {
    it('should derive error from state', () => {
        expect(selectMoviesFetchError(store)).toEqual('error');
    });
});

describe('selectMoviesLoading', () => {
    it('should derive loading flag from state', () => {
        expect(selectMoviesLoading(store)).toBeTruthy();
    });
});
