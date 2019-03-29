import React from 'react';
import { MovieTilesPane } from '../../components';
import { BackNavigation, MovieDetails } from './components';

const moviesArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export const DetailsScene = () => (
    <main style={{ width: 'auto', margin: '0 24px' }}>
        <BackNavigation />
        <MovieDetails />
        <MovieTilesPane title="Films by this genre:" movies={moviesArray} />
    </main>
);
