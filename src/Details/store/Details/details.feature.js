const detailsFeature = 'MovieDetails';

export const withDetailsFeatureAction = actionName => payload => ({
    type: withDetailsFeatureLabel(actionName),
    payload
});

export const withDetailsFeatureLabel = actionName =>
    `@${detailsFeature}/${actionName}`;
