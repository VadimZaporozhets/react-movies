import React, { Component } from 'react';
import { object, array, string, bool, func, number } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { MovieTilesPane } from '../components';
import { SearchPanel } from './SearchPanel';
import { SortResultsPanel } from './SortResultsPannel';
import { HomeStyles as styles } from './HomeStyles';
import { SORT_PARAMS } from '../constants';
import { formatMovies } from './Home.formatter';
import { fetchMovies } from './store/Movies/movies.actions';
import {
    selectMovies,
    selectMoviesFetchError,
    selectMoviesLoading,
    selectMoviesTotal
} from './store/Movies/movies.selectors';

const mapStateToProps = state => ({
    movies: selectMovies(state),
    loading: selectMoviesLoading(state),
    error: selectMoviesFetchError(state),
    total: selectMoviesTotal(state)
});

const mapDispatchToProps = {
    fetchMovies
};

export class HomeSceneComponent extends Component {
    state = {
        sortParam: SORT_PARAMS.releaseDate
    };

    changeSortParam = ({ currentTarget: { value } }) => {
        this.setState({
            sortParam: value
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

export const HomeScene = compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(HomeSceneComponent);
