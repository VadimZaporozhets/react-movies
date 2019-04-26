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
        const { title, movies, error } = this.props;

        const searchOrErrorText = error || 'Search for movies';

        return (
            <>
                {movies.length ? (
                    <Grid container spacing={40}>
                        <Grid item xs={12}>
                            <Typography variant="h4">{title}</Typography>
                        </Grid>
                        {this.renderMovieTiles()}
                    </Grid>
                ) : (
                    <Typography variant="h4">{searchOrErrorText}</Typography>
                )}
            </>
        );
    }
}

MovieTilesPane.propTypes = {
    movies: array.isRequired,
    title: string.isRequired,
    error: string.isRequired
};
