import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeScene, DetailsScene } from './scenes';

export const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={HomeScene} />
            <Route path="/details" exact component={DetailsScene} />
        </Switch>
    </Router>
);
