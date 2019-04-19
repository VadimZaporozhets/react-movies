import {
    selectDetailsError,
    selectSimilarMovies,
    selectLoadingMovies,
    selectLoadingDetails,
    selectDetails
} from '../details.selectors';

const initializeStore = () => ({
    movieDetails: {
        data: expect.any(Object),
        loadingDetails: false,
        loadingMovies: true,
        error: 'error',
        similarMovies: expect.any(Array)
    }
});

describe('selectDetails', () => {
    it('should return details object', () => {
        const store = initializeStore();

        expect(selectDetails(store)).toEqual(expect.any(Object));
    });
});

describe('selectLoadingDetails', () => {
    it('should return loading boolean', () => {
        const store = initializeStore();

        expect(selectLoadingDetails(store)).toBeFalsy();
    });
});

describe('selectLoadingMovies', () => {
    it('should return loading boolean', () => {
        const store = initializeStore();

        expect(selectLoadingMovies(store)).toBeTruthy();
    });
});

describe('selectSimilarMovies', () => {
    it('should return similar movies array', () => {
        const store = initializeStore();

        expect(selectSimilarMovies(store)).toEqual(expect.any(Array));
    });
});

describe('selectDetailsError', () => {
    it('should return error string', () => {
        const store = initializeStore();

        expect(selectDetailsError(store)).toEqual('error');
    });
});
