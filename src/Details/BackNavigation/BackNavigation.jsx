import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export const BackNavigation = () => (
    <Grid container spacing={40}>
        <Grid xs={12} item>
            <Paper elevation={1} style={{ padding: 20 }}>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <Button variant="outlined" size="medium">
                        &#8592; Back to Home
                    </Button>
                </Link>
            </Paper>
        </Grid>
    </Grid>
);
