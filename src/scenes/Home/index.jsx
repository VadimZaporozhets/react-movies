import React from 'react';
import { MovieTilesPane } from '../../components';
import { SearchPanel, SortResultsPanel } from './components';

const moviesArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export const HomeScene = () => (
    <main style={{ width: 'auto', margin: '0 24px' }}>
        <SearchPanel />
        <SortResultsPanel />
        <MovieTilesPane title="Found results:" movies={moviesArray} />
    </main>
);
