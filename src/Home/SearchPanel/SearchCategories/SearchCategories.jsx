import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { object, string } from '../../../propTypes';
import { withStyles } from '@material-ui/core/styles';
import { SearchCategoriesStyles as styles } from './SearchCategoriesStyles';

const SearchCategoriesComponent = ({ searchBy, classes }) => (
    <Grid container spacing={40}>
        <Grid item sm={12}>
            <Typography
                className={classes.marginRight}
                inline
                gutterBottom
                variant="button"
            >
                Search by:
            </Typography>
            <Button
                className={classes.marginRight}
                variant={searchBy === 'Title' ? 'contained' : 'outlined'}
                size="small"
                color="primary"
            >
                Title
            </Button>
            <Button
                variant={searchBy === 'Genre' ? 'contained' : 'outlined'}
                size="small"
                color="primary"
            >
                Genre
            </Button>
        </Grid>
    </Grid>
);

SearchCategoriesComponent.propTypes = {
    searchBy: string.isRequired,
    classes: object.isRequired
};

export const SearchCategories = withStyles(styles)(SearchCategoriesComponent);
