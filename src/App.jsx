import React, { Component } from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import { renderRoutes } from 'react-router-config';
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

        return <Switch>{renderRoutes(routes)}</Switch>;
    }
}

App.propTypes = {
    match: object.isRequired
};

export const AppContainer = withRouter(App);
