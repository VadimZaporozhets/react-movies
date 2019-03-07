import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

const rootEl = document.getElementById('root');

const element = React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Generally I am React.createElement'),
    <App />
);

render(element, rootEl);
