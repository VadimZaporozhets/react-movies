import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { object, string, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { SearchCategoriesStyles as styles } from './SearchCategoriesStyles';
import { SEARCH_BY_PARAMS } from '../../../constants';

export const SearchCategoriesComponent = ({
    searchBy,
    classes,
    handleSearchByChange
}) => (
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
                id="search-by-title"
                className={classes.marginRight}
                variant={
                    searchBy === SEARCH_BY_PARAMS.title
                        ? 'contained'
                        : 'outlined'
                }
                size="small"
                color="primary"
                onClick={() => {
                    handleSearchByChange(SEARCH_BY_PARAMS.title);
                }}
            >
                Title
            </Button>
            <Button
                variant={
                    searchBy === SEARCH_BY_PARAMS.genre
                        ? 'contained'
                        : 'outlined'
                }
                size="small"
                color="primary"
                onClick={() => {
                    handleSearchByChange(SEARCH_BY_PARAMS.genre);
                }}
            >
                Genre
            </Button>
        </Grid>
    </Grid>
);

SearchCategoriesComponent.propTypes = {
    searchBy: string.isRequired,
    classes: object.isRequired,
    handleSearchByChange: func.isRequired
};

export const SearchCategories = withStyles(styles)(SearchCategoriesComponent);
