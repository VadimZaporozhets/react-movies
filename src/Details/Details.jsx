import React from 'react';
import { MovieTilesPane } from '../components';
import { BackNavigation } from './BackNavigation';
import { MovieDetails } from './MovieDetails';
import { getMovies, getMovieDetails } from '../data/Movies';

const movies = getMovies();
const details = getMovieDetails();

export const DetailsScene = () => {
    const {
        title,
        imageUrl,
        rating,
        releaseYear,
        genres,
        description
    } = details;
    return (
        <main style={{ width: 'auto', margin: '0 24px' }}>
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
