import React, { Component } from 'react';
import { MovieTilesPane } from '../components';
import { BackNavigation } from './BackNavigation';
import { MovieDetails } from './MovieDetails';
import { withStyles } from '@material-ui/core/styles';
import { object } from 'prop-types';
import { DetailsStyles as styles } from './DetailsStyles';
import { formatMovieData, formatMovies } from './Details.formatter';
import { movieService } from '../api/Movies/movies-api';
import CircularProgress from '@material-ui/core/CircularProgress';

class DetailsSceneComponent extends Component {
    state = {
        details: null,
        movies: null
    };

    componentDidMount = async () => {
        const details = await movieService.getMovieById();

        this.setState({
            details: formatMovieData(details)
        });

        const movies = await movieService.getMovies();

        this.setState({
            movies: formatMovies(movies)
        });
    };

    render() {
        const { movies, details } = this.state;
        const {
            title,
            poster_path,
            overview,
            releaseYear,
            genres,
            description
        } = details || {};

        const { classes } = this.props;
        return (
            <main className={classes.details}>
                <BackNavigation />
                {details ? (
                    <MovieDetails
                        {...{
                            poster_path,
                            title,
                            overview,
                            releaseYear,
                            genres,
                            description
                        }}
                    />
                ) : (
                    <CircularProgress className={classes.progress} />
                )}
                {movies ? (
                    <MovieTilesPane
                        title="Films by this genre:"
                        movies={movies}
                    />
                ) : (
                    <CircularProgress className={classes.progress} />
                )}
            </main>
        );
    }
}

DetailsSceneComponent.propTypes = {
    classes: object.isRequired
};

export const DetailsScene = withStyles(styles)(DetailsSceneComponent);
