import { ActionCreatorFactory } from './ActionCreatorFactory';

export const FeatureActionCreator = featureName => actionName =>
    ActionCreatorFactory(`@${featureName}/${actionName}`);

export const createFeature = featureName => ({
    name: featureName,
    ActionCreator: FeatureActionCreator(featureName)
});
