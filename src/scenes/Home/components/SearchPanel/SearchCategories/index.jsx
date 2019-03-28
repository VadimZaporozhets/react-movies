import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const SearchCategories = () => (
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
                variant="outlined"
                size="small"
                color="primary"
            >
                Title
            </Button>
            <Button variant="outlined" size="small" color="primary">
                Genre
            </Button>
        </Grid>
    </Grid>
);
