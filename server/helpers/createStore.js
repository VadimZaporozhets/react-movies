import { createStore, applyMiddleware } from 'redux';
import { createMemoryHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

import { reducer } from '../../src/store/reducer';
import { rootSaga } from '../../src/store/sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

export const initStore = ({ baseUrl }) => {
    const history = createMemoryHistory({
        initialEntries: [baseUrl]
    });

    const store = createStore(reducer(history), middleware);

    sagaMiddleware.run(rootSaga);

    return store;
};
