import React, { Component } from 'react';
import { object, array, string, bool, func, number } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';
import { MovieTilesPane } from '../components';
import { SearchPanel } from './SearchPanel';
import { SortResultsPanel } from './SortResultsPannel';
import { HomeStyles as styles } from './HomeStyles';
import { SORT_PARAMS } from '../constants';
import { formatMovies } from './Home.formatter';
import { fetchMovies as fetchMoviesAction } from './store/Movies/movies.actions';
import { connect } from 'react-redux';
import {
    selectMovies,
    selectMoviesFetchError,
    selectMoviesLoading,
    selectMoviesTotal
} from './store/Movies/movies.selectors';

const mapStateToProps = store => ({
    movies: selectMovies(store),
    loading: selectMoviesLoading(store),
    error: selectMoviesFetchError(store),
    total: selectMoviesTotal(store)
});

const mapDispatchToProps = dispatch => ({
    fetchMovies: searchObj => dispatch(fetchMoviesAction(searchObj))
});

export class HomeSceneComponent extends Component {
    state = {
        sortParam: SORT_PARAMS.releaseDate
    };

    changeSortParam = sortParam => {
        this.setState({
            sortParam
        });
    };

    sortByReleaseDate = (firstMovie, secondMovie) => {
        const firstMovieReleaseDate = new Date(firstMovie.release_date);
        const secondMovieReleaseDate = new Date(secondMovie.release_date);
        return secondMovieReleaseDate - firstMovieReleaseDate;
    };

    sortByRating = (firstMovie, secondMovie) =>
        secondMovie.vote_average - firstMovie.vote_average;

    getSortedMovies = () => {
        const { movies } = this.props;
        const { sortParam } = this.state;
        let sortedMovies;

        if (sortParam === SORT_PARAMS.releaseDate) {
            sortedMovies = movies.sort(this.sortByReleaseDate);
        } else if (sortParam === SORT_PARAMS.rating) {
            sortedMovies = movies.sort(this.sortByRating);
        }

        return formatMovies(sortedMovies);
    };

    render() {
        const { classes, loading, error, fetchMovies, total } = this.props;

        const { sortParam } = this.state;

        const sortedMovies = this.getSortedMovies();

        return (
            <main className={classes.home}>
                <SearchPanel onSubmit={fetchMovies} />
                <SortResultsPanel
                    total={total}
                    currentSortParam={sortParam}
                    onSortParamChange={this.changeSortParam}
                />
                {loading ? (
                    <CircularProgress className={classes.progress} />
                ) : sortedMovies.length ? (
                    <MovieTilesPane
                        title="Found results:"
                        movies={sortedMovies}
                    />
                ) : (
                    <Typography className={classes.text} variant="h4">
                        {error || 'Search for movies'}
                    </Typography>
                )}
            </main>
        );
    }
}

HomeSceneComponent.propTypes = {
    classes: object.isRequired,
    movies: array.isRequired,
    error: string.isRequired,
    loading: bool.isRequired,
    fetchMovies: func.isRequired,
    total: number
};

const HomeSceneComponentStyled = withStyles(styles)(HomeSceneComponent);

export const HomeScene = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeSceneComponentStyled);
