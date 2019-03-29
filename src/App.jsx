import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeScene, DetailsScene } from './scenes';

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = { error: false, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.errorInfo) {
            return <h2>{this.state.errorInfo}</h2>;
        } else {
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
}
