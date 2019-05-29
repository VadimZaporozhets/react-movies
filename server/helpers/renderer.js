import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import { routes } from '../../src/routes';
import { getInitialTemplate } from '../page-template';

export const renderer = (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                {renderRoutes(routes)}
            </StaticRouter>
        </Provider>
    );

    return getInitialTemplate(content, store);
};
