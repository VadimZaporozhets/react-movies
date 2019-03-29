import React from 'react';
import { MovieTilesPane } from '../components';
import { SearchPanel } from './SearchPanel';
import { SortResultsPanel } from './SortResultsPannel';
import { getMovies } from '../data/Movies';
import './Home.css';

const movies = getMovies();

export const HomeScene = () => (
    <main className="home">
        <SearchPanel />
        <SortResultsPanel />
        <MovieTilesPane title="Found results:" movies={movies} />
    </main>
);
