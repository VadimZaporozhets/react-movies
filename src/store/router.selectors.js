import { createSelector } from 'reselect';

export const getRouter = state => state.router;

export const selectPathname = createSelector(
    getRouter,
    ({ location: { pathname } }) => pathname
);
