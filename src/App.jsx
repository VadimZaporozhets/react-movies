import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeScene } from './Home';
import { DetailsScene } from './Details';

export class App extends Component {
    state = {
        error: false,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            errorInfo
        });
    }

    render() {
        const { errorInfo } = this.state;

        if (this.state.errorInfo) {
            return <h2>{errorInfo}</h2>;
        }

        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={HomeScene} />
                    <Route path="/details" exact component={DetailsScene} />
                </Switch>
            </Router>
        );
    }
}
