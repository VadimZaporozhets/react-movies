import React from 'react';
import { MovieTilesPane } from '../components';
import { BackNavigation } from './BackNavigation';
import { MovieDetails } from './MovieDetails';
import { getMovies, getMovieDetails } from '../data/Movies';
import { withStyles } from '@material-ui/core/styles';
import { object } from '../propTypes';
import { DetailsStyles as styles } from './DetailsStyles';

const movies = getMovies();
const details = getMovieDetails();

const DetailsSceneComponent = ({ classes }) => {
    const {
        title,
        imageUrl,
        rating,
        releaseYear,
        genres,
        description
    } = details;
    return (
        <main className={classes.details}>
            <BackNavigation />
            <MovieDetails
                imageUrl={imageUrl}
                title={title}
                rating={rating}
                releaseYear={releaseYear}
                genres={genres}
                description={description}
            />
            <MovieTilesPane title="Films by this genre:" movies={movies} />
        </main>
    );
};

DetailsSceneComponent.propTypes = {
    classes: object.isRequired
};

export const DetailsScene = withStyles(styles)(DetailsSceneComponent);
