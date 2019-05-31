import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { routes } from '../../src/routes';
import { getInitialTemplate } from '../page-template';

export const renderer = (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                <Switch>{renderRoutes(routes)}</Switch>
            </StaticRouter>
        </Provider>
    );

    return getInitialTemplate(content, store);
};
