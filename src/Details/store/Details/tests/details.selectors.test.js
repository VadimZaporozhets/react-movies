import {
    selectDetailsError,
    selectSimilarMoviesError,
    selectSimilarMovies,
    selectLoadingMovies,
    selectLoadingDetails,
    selectDetails
} from '../details.selectors';

const store = {
    movieDetails: {
        data: expect.any(Object),
        loadingDetails: false,
        loadingMovies: true,
        similarMoviesError: 'error',
        detailsError: 'error',
        similarMovies: expect.any(Array)
    }
};

describe('selectDetails', () => {
    it('should return details object', () => {
        expect(selectDetails(store)).toEqual(expect.any(Object));
    });
});

describe('selectLoadingDetails', () => {
    it('should return loading boolean', () => {
        expect(selectLoadingDetails(store)).toBeFalsy();
    });
});

describe('selectLoadingMovies', () => {
    it('should return loading boolean', () => {
        expect(selectLoadingMovies(store)).toBeTruthy();
    });
});

describe('selectSimilarMovies', () => {
    it('should return similar movies array', () => {
        expect(selectSimilarMovies(store)).toEqual(expect.any(Array));
    });
});

describe('selectDetailsError', () => {
    it('should return details error string', () => {
        expect(selectDetailsError(store)).toEqual('error');
    });
});

describe('selectSimilarMoviesError', () => {
    it('should return similar movies error string', () => {
        expect(selectSimilarMoviesError(store)).toEqual('error');
    });
});
