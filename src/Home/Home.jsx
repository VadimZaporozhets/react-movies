import React, { Component } from 'react';
import { object, array, string, bool, func, number } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'connected-react-router';

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
import { withSortParam } from '../hocs/withSortParam';
import { withLoading } from '../hocs/withLoading/withLoading';

const WithLoadingMovieTilesPane = withLoading(MovieTilesPane);

export class HomeSceneContainer extends Component {
    state = {
        sortParam: SORT_PARAMS.releaseDate
    };

    render() {
        const {
            classes,
            loading,
            error,
            push,
            total,
            onSortParamChange,
            movies,
            sortParam
        } = this.props;

        return (
            <main className={classes.home}>
                <SearchPanel onSubmit={push} />
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
    push: func.isRequired,
    total: number,
    onSortParamChange: func.isRequired,
    sortParam: string.isRequired
};

const mapStateToProps = (state, { sortParam }) => ({
    movies: selectMovies(state, sortParam),
    loading: selectMoviesLoading(state),
    error: selectMoviesFetchError(state),
    total: selectMoviesTotal(state)
});

const mapDispatchToProps = {
    push
};

export const HomeScene = compose(
    withSortParam,
    withStyles(styles),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(HomeSceneContainer);
