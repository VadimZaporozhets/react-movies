import React from 'react';
import { object } from '../propTypes';
import { withStyles } from '@material-ui/core/styles';
import { MovieTilesPane } from '../components';
import { SearchPanel } from './SearchPanel';
import { SortResultsPanel } from './SortResultsPannel';
import { getMovies } from '../data/Movies';
import { HomeStyles as styles } from './HomeStyles';

const movies = getMovies();

const HomeSceneComponent = ({ classes }) => (
    <main className={classes.home}>
        <SearchPanel />
        <SortResultsPanel />
        <MovieTilesPane title="Found results:" movies={movies} />
    </main>
);

HomeSceneComponent.propTypes = {
    classes: object.isRequired
};

export const HomeScene = withStyles(styles)(HomeSceneComponent);
