const movieFeature = 'Movies';

export const withMoviesFeatureAction = actionName => payload => ({
    type: withMoviesFeatureLabel(actionName),
    payload
});

export const withMoviesFeatureLabel = actionName =>
    `@${movieFeature}/${actionName}`;
