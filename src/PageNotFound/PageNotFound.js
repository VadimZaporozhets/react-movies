import React from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

import { routesPaths } from '../routes';

export const PageNotFound = ({ staticContext = {} }) => {
    staticContext.notFound = true;

    return (
        <>
            <Link to={routesPaths.HOME}>Go to Home Page</Link>
            <h1>Page not found</h1>
        </>
    );
};

PageNotFound.propTypes = {
    staticContext: object
};
