import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';

import { reducer } from './reducer';
import { rootSaga } from './sagas';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const DEVELOPMENT = process.env.NODE_ENV === 'development';

let middlewares;

if (DEVELOPMENT) {
    middlewares = composeWithDevTools(
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
    );
} else {
    middlewares = applyMiddleware(routerMiddleware(history), sagaMiddleware);
}

export const store = createStore(
    reducer(history),
    window.INITIAL_STATE,
    middlewares
);

sagaMiddleware.run(rootSaga);
