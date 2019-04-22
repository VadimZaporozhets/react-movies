import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { object, func, array, bool, string } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { compose } from 'redux';

import { MovieTilesPane } from '../components';
import { BackNavigation } from './BackNavigation';
import { MovieDetails } from './MovieDetails';
import { DetailsStyles as styles } from './DetailsStyles';
import { fetchDetails } from './store/Details/details.actions';
import { formatMovies } from './Details.formatter';
import {
    selectDetails,
    selectDetailsError,
    selectLoadingDetails,
    selectLoadingMovies,
    selectSimilarMovies,
    selectSimilarMoviesError
} from './store/Details/details.selectors';

const mapStateToProps = state => ({
    details: selectDetails(state),
    loadingDetails: selectLoadingDetails(state),
    loadingMovies: selectLoadingMovies(state),
    detailsError: selectDetailsError(state),
    similarMoviesError: selectSimilarMoviesError(state),
    similarMovies: selectSimilarMovies(state)
});

const mapDispatchToProps = {
    fetchDetails
};

export class DetailsSceneComponent extends Component {
    componentDidMount() {
        this.fetchMovieDetails();
    }

    componentDidUpdate(prevProps) {
        const prevId = prevProps.match.params.id;
        const nextId = this.props.match.params.id;
        if (prevId !== nextId) {
            this.fetchMovieDetails();
        }
    }

    fetchMovieDetails() {
        const { fetchDetails, match } = this.props;
        fetchDetails(match.params.id);
    }

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
        } = details || {};

        const { classes } = this.props;
        return (
            <main className={classes.details}>
                <BackNavigation />
                {detailsError ? (
                    <Typography>{detailsError}</Typography>
                ) : loadingDetails ? (
                    <CircularProgress className={classes.progress} />
                ) : (
                    <MovieDetails
                        {...{
                            poster_path,
                            title,
                            overview,
                            releaseYear,
                            genres,
                            description,
                            vote_average
                        }}
                    />
                )}

                {similarMoviesError ? (
                    <Typography>{similarMoviesError}</Typography>
                ) : loadingMovies ? (
                    <CircularProgress className={classes.progress} />
                ) : (
                    <MovieTilesPane
                        title="Films by this genre:"
                        movies={formatMovies(similarMovies)}
                    />
                )}
            </main>
        );
    }
}

DetailsSceneComponent.propTypes = {
    classes: object.isRequired,
    fetchDetails: func.isRequired,
    details: object.isRequired,
    match: object.isRequired,
    loadingDetails: bool.isRequired,
    loadingMovies: bool.isRequired,
    similarMoviesError: string.isRequired,
    detailsError: string.isRequired,
    similarMovies: array.isRequired
};

export const DetailsScene = compose(
    withStyles(styles),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(DetailsSceneComponent);
