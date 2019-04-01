import React, { Component } from 'react';
import { array, string } from '../../propTypes';
import { MovieTile } from './MovieTile';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export class MovieTilesPane extends Component {
    renderMovieTiles = () => {
        const { movies } = this.props;

        return movies.map(movie => {
            const { imageSrc, title, releaseYear, genres, id } = movie;
            return (
                <MovieTile
                    key={id}
                    imageSrc={imageSrc}
                    title={title}
                    releaseYear={releaseYear}
                    genres={genres}
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
