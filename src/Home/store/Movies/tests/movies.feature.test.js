import {
    withMoviesFeatureLabel,
    withMoviesFeatureAction
} from '../movies.feature';

describe('withMoviesFeatureLabel', () => {
    it('should return label with Movies feature', () => {
        expect(withMoviesFeatureLabel('action')).toEqual('@Movies/action');
    });
});

describe('withMoviesFeatureAction', () => {
    it('should return action with Movies feature', () => {
        expect(withMoviesFeatureAction('action')('payload')).toEqual({
            type: '@Movies/action',
            payload: 'payload'
        });
    });
});
