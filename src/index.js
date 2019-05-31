import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from './App';
import { history, store } from './store';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

const rootEl = document.getElementById('root');

hydrate(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <AppContainer />
        </ConnectedRouter>
    </Provider>,
    rootEl
);
