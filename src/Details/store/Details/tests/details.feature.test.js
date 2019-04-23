import { DetailsFeature } from '../details.feature';

describe('withDetailsFeatureLabel', () => {
    it('should return label with Details feature', () => {
        expect(DetailsFeature.withDetailsFeatureLabel('action')).toEqual(
            '@MovieDetails/action'
        );
    });
});

describe('actionCreator', () => {
    it('should return action with Movies feature', () => {
        expect(DetailsFeature.actionCreator('action')('payload')).toEqual({
            type: '@MovieDetails/action',
            payload: 'payload'
        });
    });
});
