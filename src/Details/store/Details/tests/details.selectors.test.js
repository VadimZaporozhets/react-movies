import {
    selectDetailsError,
    selectSimilarMoviesError,
    selectSimilarMovies,
    selectLoadingMovies,
    selectLoadingDetails,
    selectDetails
} from '../details.selectors';

const store = {
    MovieDetails: {
        data: expect.any(Object),
        loadingDetails: false,
        detailsError: 'error'
    },
    Movies: {
        data: expect.any(Array),
        error: 'error',
        loading: true
    }
};

describe('selectDetails', () => {
    it('should derive details from state', () => {
        expect(selectDetails(store)).toEqual(expect.any(Object));
    });
});

describe('selectLoadingDetails', () => {
    it('should derive details loading flag from state', () => {
        expect(selectLoadingDetails(store)).toBeFalsy();
    });
});

describe('selectLoadingMovies', () => {
    it('should derive movies loading flag from state', () => {
        expect(selectLoadingMovies(store)).toBeTruthy();
    });
});

describe('selectSimilarMovies', () => {
    it('should derive similar movies array from state', () => {
        expect(selectSimilarMovies(store)).toEqual(expect.any(Array));
    });
});

describe('selectDetailsError', () => {
    it('should derive details error from state', () => {
        expect(selectDetailsError(store)).toEqual('error');
    });
});

describe('selectSimilarMoviesError', () => {
    it('should derive similar movies error from state', () => {
        expect(selectSimilarMoviesError(store)).toEqual('error');
    });
});
