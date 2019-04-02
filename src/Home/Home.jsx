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

class HomeSceneComponent extends Component {
    state = {
        movies: null
    };

    componentDidMount = async () => {
        await movieService.getMovies().then(movies => {
            this.setState({
                movies: formatMovies(movies)
            });
        });
    };

    render() {
        const { movies } = this.state;
        const { classes } = this.props;

        return (
            <main className={classes.home}>
                <SearchPanel />
                <SortResultsPanel />
                {movies ? (
                    <MovieTilesPane title="Found results:" movies={movies} />
                ) : (
                    <CircularProgress className={classes.progress} />
                )}
            </main>
        );
    }
}

HomeSceneComponent.propTypes = {
    classes: object.isRequired
};

export const HomeScene = withStyles(styles)(HomeSceneComponent);
