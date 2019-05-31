import React, { Component } from 'react';
import { object, array, string, bool, func, number } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { MovieTilesPane } from '../components';
import { SearchPanel } from './SearchPanel';
import { SortResultsPanel } from './SortResultsPannel';
import { HomeStyles as styles } from './HomeStyles';
import { SORT_PARAMS } from '../constants';
import {
    selectMovies,
    selectMoviesFetchError,
    selectMoviesLoading,
    selectMoviesTotal
} from './store/Movies/movies.selectors';
import { loadInitialMovies, searchMovies } from './store/Movies/movies.actions';
import { withSortParam } from '../hocs/withSortParam';
import { withLoading } from '../hocs/withLoading/withLoading';
import { selectPathname } from '../store/router.selectors';

const WithLoadingMovieTilesPane = withLoading(MovieTilesPane);

export class HomeSceneContainer extends Component {
    state = {
        sortParam: SORT_PARAMS.releaseDate
    };

    componentDidMount() {
        const { searchMovies, pathname, movies } = this.props;

        if (movies.length === 0) {
            searchMovies({ pathname });
        }
    }

    render() {
        const {
            classes,
            loading,
            error,
            searchMovies,
            total,
            onSortParamChange,
            movies,
            sortParam,
            pathname
        } = this.props;

        return (
            <main className={classes.home}>
                <SearchPanel onSubmit={searchMovies} pathname={pathname} />
                <SortResultsPanel
                    total={total}
                    currentSortParam={sortParam}
                    onSortParamChange={onSortParamChange}
                />
                <WithLoadingMovieTilesPane
                    loading={loading}
                    title="Found results:"
                    movies={movies}
                    error={error}
                />
            </main>
        );
    }
}

HomeSceneContainer.propTypes = {
    classes: object.isRequired,
    movies: array.isRequired,
    error: string.isRequired,
    loading: bool.isRequired,
    total: number,
    onSortParamChange: func.isRequired,
    sortParam: string.isRequired,
    searchMovies: func.isRequired,
    pathname: string.isRequired
};

const mapStateToProps = (state, { sortParam }) => ({
    movies: selectMovies(state, sortParam),
    loading: selectMoviesLoading(state),
    error: selectMoviesFetchError(state),
    total: selectMoviesTotal(state),
    pathname: selectPathname(state)
});

const mapDispatchToProps = {
    searchMovies
};

const loadData = ({ dispatch }, { url }) => {
    return dispatch(loadInitialMovies({ url }));
};

export const HomeScene = {
    component: compose(
        withSortParam,
        withStyles(styles),
        connect(
            mapStateToProps,
            mapDispatchToProps
        )
    )(HomeSceneContainer),
    loadData
};
