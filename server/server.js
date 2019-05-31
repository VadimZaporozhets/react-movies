import express from 'express';
import { matchRoutes } from 'react-router-config';

import { renderer } from './helpers/renderer';
import { routes, routesPaths } from '../src/routes';
import { initStore } from './helpers/createStore';
import { formatSearchRoute } from '../src/Home/Home.formatter';

const app = express();

app.use(express.static('public'));

app.use(routesPaths.MASKED_ROUTE, (req, res, next) => {
    debugger;
    const { searchQuery, searchBy } = req.params;
    req.baseURL = formatSearchRoute(searchQuery, searchBy);
    next();
});

app.get('*', async (req, res) => {
    const store = initStore(req);

    matchRoutes(routes, req.url).map(({ route }) => {
        if (route.loadData) {
            return route.loadData(store, req);
        }
    });

    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
        return res.redirect(301, context.url);
    }

    if (context.notFound) {
        res.status(404);
    }

    res.send(content);
});

app.listen(9000, () => {
    console.log('listening on port 9000');
});
