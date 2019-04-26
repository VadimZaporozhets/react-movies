import { MoviesFeature, MoviesFeatureName } from '../movies.feature';

describe('ActionCreator', () => {
    it('should return action with Movies feature', () => {
        const actualAction = MoviesFeature.ActionCreator('action')('payload');
        const expectedAction = {
            type: `@${MoviesFeatureName}/action`,
            payload: 'payload'
        };

        expect(actualAction).toEqual(expectedAction);
    });
});
