import React from 'react';
import { MovieTilesPane } from '../components';
import { SearchPanel } from './SearchPanel';
import { SortResultsPanel } from './SortResultsPannel';
import { getMovies } from '../data/Movies';

const movies = getMovies();

export const HomeScene = () => (
    <main style={{ width: 'auto', margin: '0 24px' }}>
        <SearchPanel />
        <SortResultsPanel />
        <MovieTilesPane title="Found results:" movies={movies} />
    </main>
);
