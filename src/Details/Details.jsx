import React, { Component } from 'react';
import { MovieTilesPane } from '../components';
import { BackNavigation } from './BackNavigation';
import { MovieDetails } from './MovieDetails';
import { withStyles } from '@material-ui/core/styles';
import { object, func, array, bool, string } from 'prop-types';
import { DetailsStyles as styles } from './DetailsStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import { fetchDetails as fetchDetailsAction } from './store/Details/details.actions';
import { formatMovies } from './Details.formatter';
import { Typography } from '@material-ui/core';
import {
    selectDetails,
    selectDetailsError,
    selectLoadingDetails,
    selectLoadingMovies,
    selectSimilarMovies
} from './store/Details/details.selectors';

const mapStateToProps = store => ({
    details: selectDetails(store),
    loadingDetails: selectLoadingDetails(store),
    loadingMovies: selectLoadingMovies(store),
    error: selectDetailsError(store),
    similarMovies: selectSimilarMovies(store)
});

const mapDispatchToProps = dispatch => ({
    fetchDetails: id => {
        dispatch(fetchDetailsAction(id));
    }
});

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
            error
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
                {error && <Typography>{error}</Typography>}
                {loadingDetails ? (
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
                {loadingMovies ? (
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
    error: string.isRequired,
    similarMovies: array.isRequired
};

export const DetailsStyledComponent = withStyles(styles)(DetailsSceneComponent);

export const DetailsScene = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsStyledComponent);
