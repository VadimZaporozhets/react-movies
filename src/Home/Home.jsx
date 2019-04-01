import React, { Component } from 'react';
import { object } from '../propTypes';
import { withStyles } from '@material-ui/core/styles';
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

    componentDidMount() {
        this.getMovies().then(movies => {
            this.setState({
                movies: formatMovies(movies)
            });
        });
    }

    getMovies = async () => {
        return await movieService.getMovies();
    };

    render() {
        const { movies } = this.state;
        const { classes } = this.props;

        return (
            <main className={classes.home}>
                <SearchPanel />
                <SortResultsPanel />
                {movies && (
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
