import React from 'react';
import { MovieTilesPane } from '../../components';
import { Link } from 'react-router-dom';
import { SearchPanel, SortResultsPannel } from './components';

const moviesArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export const HomeScene = () => (
    <main style={{ width: 1100, maxWidth: '100%', margin: '0 auto' }}>
        <SearchPanel />
        <SortResultsPannel />
        <MovieTilesPane movies={moviesArray} />
        <Link to={'/details'}>Details</Link>
    </main>
);
