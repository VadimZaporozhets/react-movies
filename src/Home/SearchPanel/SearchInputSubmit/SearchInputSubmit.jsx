import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button/index';
import TextField from '@material-ui/core/TextField';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { SearchInputSubmitStyles as styles } from './SearchInputSubmitStyles';

export const SearchInputSubmitComponent = ({ classes }) => (
    <Grid container spacing={40}>
        <Grid sm={12} md={8} lg={10} item>
            <TextField placeholder="Search" fullWidth />
        </Grid>
        <Grid sm={12} md={4} lg={2} item className={classes.alignRight}>
            <Button variant="contained" color="primary">
                Search
            </Button>
        </Grid>
    </Grid>
);

SearchInputSubmitComponent.propTypes = {
    classes: object.isRequired
};

export const SearchInputSubmit = withStyles(styles)(SearchInputSubmitComponent);
