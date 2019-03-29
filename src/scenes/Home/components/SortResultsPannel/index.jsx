import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export const SortResultsPanel = () => (
    <Grid container spacing={40}>
        <Grid item xs={12}>
            <Paper style={{ marginBottom: 20, padding: 20 }} elevation={1}>
                <Grid container spacing={40}>
                    <Grid container alignItems="center" item sm={12} md={6}>
                        <Typography variant="button">
                            Found 20 movies
                        </Typography>
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
            </Paper>
        </Grid>
    </Grid>
);
