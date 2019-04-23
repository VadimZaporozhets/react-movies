import { MoviesFeature } from '../movies.feature';

describe('withMoviesFeatureLabel', () => {
    it('should return label with Movies feature', () => {
        expect(MoviesFeature.withMoviesFeatureLabel('action')).toEqual(
            '@Movies/action'
        );
    });
});

describe('actionCreator', () => {
    it('should return action with Movies feature', () => {
        expect(MoviesFeature.actionCreator('action')('payload')).toEqual({
            type: '@Movies/action',
            payload: 'payload'
        });
    });
});
