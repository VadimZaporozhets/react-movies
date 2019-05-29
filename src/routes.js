import { HomeScene } from './Home';
import { DetailsScene } from './Details';
import { PageNotFound } from './PageNotFound';

export const routes = [
    {
        ...HomeScene,
        path: '/'
    },
    {
        ...HomeScene,
        path: '/search/:searchQuery/:searchBy'
    },
    {
        ...DetailsScene,
        path: '/details/:id'
    },
    {
        ...PageNotFound,
        path: '/not-found'
    }
];

export const routesPaths = {
    HOME: '/',
    SEARCH: '/search/:searchQuery/:searchBy',
    DETAILS: '/details/:id',
    NO_MATCH: '/not-found'
};
