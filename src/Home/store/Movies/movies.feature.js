export const MoviesFeature = {
    name: 'Movies',
    actionCreator: function(actionName) {
        return payload => ({
            type: this.withMoviesFeatureLabel(actionName),
            payload
        });
    },
    withMoviesFeatureLabel: function(actionName) {
        return `@${this.name}/${actionName}`;
    }
};
