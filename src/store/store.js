import { createStore, applyMiddleware } from 'redux';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { createBrowserHistory } from 'history';

import { reducer } from './reducer';
import { rootSaga } from './sagas';

const persistConfig = {
    key: 'root',
    blacklist: ['router'],
    storage
};

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, reducer(history));

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
