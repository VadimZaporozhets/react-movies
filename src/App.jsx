import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

import { HomeScene } from './Home';
import { DetailsScene } from './Details';
import { store, persistor, history } from './store';
import { routes } from './routes';

export class App extends Component {
    state = {
        errorInfo: null
    };

    static getDerivedStateFromError(error) {
        return { errorInfo: error };
    }

    render() {
        const { errorInfo } = this.state;

        if (errorInfo) {
            return <h2>{errorInfo.message}</h2>;
        }

        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route
                                path={routes.HOME}
                                exact
                                component={HomeScene}
                            />
                            <Route
                                path={routes.DETAILS}
                                exact
                                component={DetailsScene}
                            />
                        </Switch>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>
        );
    }
}
