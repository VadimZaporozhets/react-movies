import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { object, array, bool, string } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { compose } from 'redux';
import { matchPath } from 'react-router-dom';

import { MovieTilesPane } from '../components';
import { BackNavigation } from './BackNavigation';
import { MovieDetails } from './MovieDetails';
import { DetailsStyles as styles } from './DetailsStyles';
import { formatMovies } from './Details.formatter';
import {
    selectDetails,
    selectDetailsError,
    selectLoadingDetails,
    selectLoadingMovies,
    selectSimilarMovies,
    selectSimilarMoviesError
} from './store/Details/details.selectors';
import { withLoading } from '../hocs/withLoading/withLoading';
import { routesPaths } from '../routes';
import { movieService } from '../api/Movies/movies-api';
import { fetchDetailsSuccess } from './store/Details/details.actions';

const WithLoadingMovieTilesPane = withLoading(MovieTilesPane);
const WithLoadingMovieDetails = withLoading(MovieDetails);

export class DetailsSceneContainer extends Component {
    render() {
        const {
            similarMovies,
            details,
            loadingDetails,
            loadingMovies,
            detailsError,
            similarMoviesError
        } = this.props;
        const {
            title,
            poster_path,
            overview,
            releaseYear,
            genres,
            description,
            vote_average
        } = details;

        const { classes } = this.props;
        return (
            <main className={classes.details}>
                <BackNavigation />
                {detailsError ? (
                    <Typography>{detailsError}</Typography>
                ) : loadingDetails ? (
                    <CircularProgress className={classes.progress} />
                ) : (
                    <WithLoadingMovieDetails
                        {...{
                            poster_path,
                            title,
                            overview,
                            releaseYear,
                            genres,
                            description,
                            vote_average
                        }}
                        loading={loadingDetails}
                        error={similarMoviesError}
                    />
                )}
                <WithLoadingMovieTilesPane
                    loading={loadingMovies}
                    error={'error' || similarMoviesError}
                    title="Films by this genre:"
                    movies={formatMovies(similarMovies)}
                />
            </main>
        );
    }
}

DetailsSceneContainer.propTypes = {
    classes: object.isRequired,
    details: object.isRequired,
    match: object.isRequired,
    loadingDetails: bool.isRequired,
    loadingMovies: bool.isRequired,
    similarMoviesError: string.isRequired,
    detailsError: string.isRequired,
    similarMovies: array.isRequired
};

const mapStateToProps = state => ({
    details: selectDetails(state),
    loadingDetails: selectLoadingDetails(state),
    loadingMovies: selectLoadingMovies(state),
    detailsError: selectDetailsError(state),
    similarMoviesError: selectSimilarMoviesError(state),
    similarMovies: selectSimilarMovies(state)
});

const loadData = async ({ dispatch }, { path }) => {
    const detailsMatch = matchPath(path, routesPaths.DETAILS);
    const detailId = detailsMatch.params.id;

    const { data } = await movieService.getMovieById(detailId);

    return dispatch(fetchDetailsSuccess(data));
};

export const DetailsScene = {
    component: compose(
        withStyles(styles),
        connect(mapStateToProps)
    )(DetailsSceneContainer),
    loadData
};
