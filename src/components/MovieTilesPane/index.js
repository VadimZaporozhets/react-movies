import React from 'react';
import PropTypes from 'prop-types';
import { MovieTile } from './MovieTile';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const MovieTilesPane = ({ movies, title }) => (
    <Grid container spacing={40}>
        <Grid item xs={12}>
            <Typography variant="h4">{title}</Typography>
        </Grid>
        {movies.map((movie, index) => (
            <MovieTile key={index} {...movie} />
        ))}
    </Grid>
);

MovieTilesPane.propTypes = {
    movies: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};
