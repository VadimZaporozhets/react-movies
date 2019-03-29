import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export const SearchCategories = ({ searchBy }) => (
    <Grid container spacing={40}>
        <Grid item sm={12}>
            <Typography
                style={{ marginRight: 20 }}
                inline
                gutterBottom
                variant="button"
            >
                Search by:
            </Typography>
            <Button
                style={{ marginRight: 20 }}
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

SearchCategories.propTypes = {
    searchBy: PropTypes.string.isRequired
};
