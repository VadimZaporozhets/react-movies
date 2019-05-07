import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../routes';

export const PageNotFound = () => (
    <>
        <Link to={routes.HOME}>Go to Home Page</Link>
        <h1>Page not found</h1>
    </>
);
