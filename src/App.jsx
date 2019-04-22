import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { HomeScene } from './Home';
import { DetailsScene } from './Details';
import { store, persistor } from './store';
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
                    <Router>
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
                    </Router>
                </PersistGate>
            </Provider>
        );
    }
}
