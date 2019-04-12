import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { object } from 'prop-types';
import { BackNavigationStyles as styles } from './BackNavigationStyles';

export const BackNavigationComponent = ({ classes }) => (
    <Grid container spacing={40}>
        <Grid xs={12} item>
            <Paper elevation={1} className={classes.wrapper}>
                <Link className={classes.link} to="/">
                    <Button variant="outlined" size="medium">
                        &#8592; Back to Home
                    </Button>
                </Link>
            </Paper>
        </Grid>
    </Grid>
);

BackNavigationComponent.propTypes = {
    classes: object.isRequired
};

export const BackNavigation = withStyles(styles)(BackNavigationComponent);
