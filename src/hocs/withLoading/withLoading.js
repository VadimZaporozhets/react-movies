import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';
import { bool, object } from 'prop-types';

import { styles } from './withLoading.styles';

export const withLoading = Component => {
    const WithLoadingComponent = ({ loading, classes, ...props }) => (
        <>
            {loading ? (
                <CircularProgress className={classes.progress} />
            ) : (
                <Component {...props} />
            )}
        </>
    );

    WithLoadingComponent.propTypes = {
        loading: bool.isRequired,
        classes: object.isRequired
    };

    return withStyles(styles)(WithLoadingComponent);
};
