import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { object, string, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { SearchCategoriesStyles as styles } from './SearchCategoriesStyles';
import { SEARCH_BY_PARAMS } from '../../../constants';

const resolveButtonType = (currentSortParam, buttonSortParam) =>
    currentSortParam === buttonSortParam ? 'contained' : 'outlined';

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
                variant={resolveButtonType(searchBy, SEARCH_BY_PARAMS.title)}
                size="small"
                color="primary"
                value={SEARCH_BY_PARAMS.title}
                onClick={handleSearchByChange}
            >
                Title
            </Button>
            <Button
                variant={resolveButtonType(searchBy, SEARCH_BY_PARAMS.genre)}
                size="small"
                color="primary"
                value={SEARCH_BY_PARAMS.genre}
                onClick={handleSearchByChange}
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
