import {
    withDetailsFeatureLabel,
    withDetailsFeatureAction
} from '../details.feature';

describe('withDetailsFeatureLabel', () => {
    it('should return label with Details feature', () => {
        expect(withDetailsFeatureLabel('action')).toEqual('@MovieDetails/action');
    });
});

describe('withDetailsFeatureAction', () => {
    it('should return action with Movies feature', () => {
        expect(withDetailsFeatureAction('action')('payload')).toEqual({
            type: '@MovieDetails/action',
            payload: 'payload'
        });
    });
});