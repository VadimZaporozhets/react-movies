import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const SortResultsPannel = () => (
    <Grid container spacing={40}>
        <Grid item sm={12} md={6}>
            <Typography variant="button">Found 20 movies</Typography>
        </Grid>
        <Grid item sm={12} md={6}>
            <Typography
                style={{ marginRight: 20 }}
                inline
                gutterBottom
                variant="button"
            >
                Sort by:
            </Typography>
            <Button
                style={{ marginRight: 20 }}
                variant="outlined"
                size="small"
                color="primary"
            >
                Release date
            </Button>
            <Button variant="outlined" size="small" color="primary">
                Rating
            </Button>
        </Grid>
    </Grid>
);
