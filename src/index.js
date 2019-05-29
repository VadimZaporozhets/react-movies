import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from './App';
import { history, persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('root');

hydrate(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
                <AppContainer />
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    rootEl
);
