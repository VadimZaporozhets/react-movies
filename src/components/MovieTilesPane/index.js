import React from 'react';
import PropTypes from 'prop-types';
import { MovieTile } from './MovieTile';
import Grid from '@material-ui/core/Grid';

export const MovieTilesPane = ({ movies }) => (
    <Grid container spacing={40}>
        {movies.map((movie, index) => (
            <MovieTile key={index} {...movie} />
        ))}
    </Grid>
);

MovieTilesPane.propTypes = {
    movies: PropTypes.array
};
