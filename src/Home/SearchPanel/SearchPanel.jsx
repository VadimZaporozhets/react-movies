import React from 'react';
import { SearchInputSubmit } from './SearchInputSubmit';
import { SearchCategories } from './SearchCategories';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { object } from '../../propTypes';
import { SearchPanelStyles as styles } from './SearchPannelStyles';

const SearchPanelComponent = ({ classes }) => (
    <Grid className={classes.marginBottom} container spacing={40}>
        <Grid xs={12} item>
            <Paper elevation={1} className={classes.panel}>
                <SearchInputSubmit />
                <SearchCategories searchBy="Title" />
            </Paper>
        </Grid>
    </Grid>
);

SearchPanelComponent.propTypes = {
    classes: object.isRequired
};

export const SearchPanel = withStyles(styles)(SearchPanelComponent);
