import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeScene } from './Home';
import { DetailsScene } from './Details';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export class App extends Component {
    state = {
        error: false,
        errorInfo: null
    };

    static getDerivedStateFromError(error) {
        return { error: true, errorInfo: error };
    }

    render() {
        const { errorInfo, error } = this.state;

        if (error) {
            return <h2>{errorInfo.message}</h2>;
        }

        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Router>
                        <Switch>
                            <Route path="/" exact component={HomeScene} />
                            <Route
                                path="/details/:id"
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
