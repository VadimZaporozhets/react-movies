import { DetailsFeature } from '../details.feature';
import { detailsFeatureName } from '../details.feature';

describe('ActionCreator', () => {
    it('should return action with Details feature', () => {
        const actualAction = DetailsFeature.ActionCreator('action')('payload');
        const expectedAction = {
            type: `@${detailsFeatureName}/action`,
            payload: 'payload'
        };

        expect(actualAction).toEqual(expectedAction);
    });
});
