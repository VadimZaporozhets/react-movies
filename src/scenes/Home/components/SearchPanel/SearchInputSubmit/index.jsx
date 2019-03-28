import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button/index';
import TextField from '@material-ui/core/TextField';

export const SearchInputSubmit = () => (
    <Grid style={{ paddingTop: 20 }} container spacing={40}>
        <Grid sm={12} md={8} lg={10} item>
            <TextField placeholder="Search" fullWidth />
        </Grid>
        <Grid
            sm={12}
            md={4}
            lg={2}
            item
            style={{ display: 'flex', justifyContent: 'flex-end' }}
        >
            <Button variant="contained" color="primary">
                Search
            </Button>
        </Grid>
    </Grid>
);
