import express from 'express';
import { matchRoutes } from 'react-router-config';

import { renderer } from './helpers/renderer';
import { routes } from '../src/routes';
import { initStore } from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = initStore(req);

    const promises = matchRoutes(routes, req.path)
        .map(({ route }) => {
            return route.loadData && route.loadData(store, req);
        })
        .map(promise => {
            if (promise) {
                return new Promise(resolve => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });

    Promise.all(promises).then(() => {
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
});

app.listen(9000, () => {
    console.log('listening on port 9000');
});
