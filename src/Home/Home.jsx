import React, { Component } from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MovieTilesPane } from '../components';
import { SearchPanel } from './SearchPanel';
import { SortResultsPanel } from './SortResultsPannel';
import { HomeStyles as styles } from './HomeStyles';
import { movieService } from '../api/Movies/movies-api';
import { formatMovies } from './Home.formatter';

export class HomeSceneComponent extends Component {
    state = {
        movies: null,
        loading: true
    };

    componentDidMount = async () => {
        const movies = await movieService.getMovies();

        this.setState({
            loading: false,
            movies: formatMovies(movies)
        });
    };

    render() {
        const { movies, loading } = this.state;
        const { classes } = this.props;

        return (
            <main className={classes.home}>
                <SearchPanel />
                <SortResultsPanel />
                {loading ? (
                    <CircularProgress className={classes.progress} />
                ) : (
                    <MovieTilesPane title="Found results:" movies={movies} />
                )}
            </main>
        );
    }
}

HomeSceneComponent.propTypes = {
    classes: object.isRequired
};

export const HomeScene = withStyles(styles)(HomeSceneComponent);
