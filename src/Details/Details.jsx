import React, { Component } from 'react';
import { MovieTilesPane } from '../components';
import { BackNavigation } from './BackNavigation';
import { MovieDetails } from './MovieDetails';
import { withStyles } from '@material-ui/core/styles';
import { object } from '../propTypes';
import { DetailsStyles as styles } from './DetailsStyles';
import { formatMovieData, formatMovies } from './Details.formatter';
import { movieService } from '../api/Movies/movies-api';

class DetailsSceneComponent extends Component {
    state = {
        details: null,
        movies: null
    };

    componentDidMount() {
        this.getMovieDetails().then(details => {
            this.setState({
                details: formatMovieData(details)
            });
        });

        this.getMovies().then(movies => {
            this.setState({
                movies: formatMovies(movies)
            });
        });
    }

    getMovieDetails = async () => {
        return await movieService.getMovieById();
    };

    getMovies = async () => {
        return await movieService.getMovies();
    };

    render() {
        const { movies, details } = this.state;
        const { title, imageUrl, rating, releaseYear, genres, description } =
            details || {};

        const { classes } = this.props;
        return (
            <main className={classes.details}>
                <BackNavigation />
                {details && (
                    <MovieDetails
                        imageUrl={imageUrl}
                        title={title}
                        rating={rating}
                        releaseYear={releaseYear}
                        genres={genres}
                        description={description}
                    />
                )}
                {movies && (
                    <MovieTilesPane
                        title="Films by this genre:"
                        movies={movies}
                    />
                )}
            </main>
        );
    }
}

DetailsSceneComponent.propTypes = {
    classes: object.isRequired
};

export const DetailsScene = withStyles(styles)(DetailsSceneComponent);
