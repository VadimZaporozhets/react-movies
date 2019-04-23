export const DetailsFeature = {
    name: 'MovieDetails',
    actionCreator: function(actionName) {
        return payload => ({
            type: this.withDetailsFeatureLabel(actionName),
            payload
        });
    },
    withDetailsFeatureLabel: function(actionName) {
        return `@${this.name}/${actionName}`;
    }
};
