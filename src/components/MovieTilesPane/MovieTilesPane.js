import React, { Component } from 'react';
import { array, string } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { MovieTile } from './MovieTile';

export class MovieTilesPane extends Component {
    renderMovieTiles = () => {
        const { movies } = this.props;

        return movies.map(movie => {
            const {
                poster_path,
                title,
                releaseYear,
                genres,
                id,
                vote_average
            } = movie;
            return (
                <MovieTile
                    key={id}
                    {...{
                        id,
                        poster_path,
                        title,
                        releaseYear,
                        genres,
                        vote_average
                    }}
                />
            );
        });
    };

    render() {
        const { title } = this.props;
        return (
            <Grid container spacing={40}>
                <Grid item xs={12}>
                    <Typography variant="h4">{title}</Typography>
                </Grid>
                {this.renderMovieTiles()}
            </Grid>
        );
    }
}

MovieTilesPane.propTypes = {
    movies: array.isRequired,
    title: string.isRequired
};
