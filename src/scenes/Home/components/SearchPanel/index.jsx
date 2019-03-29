import React from 'react';
import { SearchInputSubmit } from './SearchInputSubmit';
import { SearchCategories } from './SearchCategories';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export const SearchPanel = () => (
    <Grid style={{ marginBottom: 20 }} container spacing={40}>
        <Grid xs={12} item>
            <Paper elevation={1} style={{ padding: 20 }}>
                <SearchInputSubmit />
                <SearchCategories searchBy="Title" />
            </Paper>
        </Grid>
    </Grid>
);
