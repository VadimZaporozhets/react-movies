export const ActionCreatorFactory = type =>
    Object.assign(payload => ({ type, payload }), {
        is: action => action.type === type,
        get type() {
            return type;
        }
    });
