import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createMemoryHistory } from 'history';

import { reducer } from '../../src/store/reducer';

export const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

export const initStore = ({ url }) => {
    const history = createMemoryHistory({
        initialEntries: [url]
    });

    return createStore(reducer(history), middleware);
};
