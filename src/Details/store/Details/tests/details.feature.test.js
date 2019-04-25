import { DetailsFeature } from '../details.feature';

describe('withDetailsFeatureLabel', () => {
    it('should return label with Details feature', () => {
        const actualLabel = DetailsFeature.withDetailsFeatureLabel('action');
        const expectedLabel = '@MovieDetails/action';

        expect(actualLabel).toEqual(expectedLabel);
    });
});

describe('actionCreator', () => {
    it('should return action with Movies feature', () => {
        const actualAction = DetailsFeature.actionCreator('action')('payload');
        const expectedAction = {
            type: '@MovieDetails/action',
            payload: 'payload'
        };

        expect(actualAction).toEqual(expectedAction);
    });
});
