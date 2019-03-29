import { moviesArray, movieData } from './mockData';

const formatMovies = moviesArr => {
    return moviesArr.map(movie => {
        return {
            id: movie.id,
            title: movie.title,
            imageSrc: movie.poster_path,
            releaseYear: movie.release_date.split('-')[0],
            genres: movie.genres
        };
    });
};

const formatMovieData = movieData => {
    return {
        title: movieData.title,
        imageUrl: movieData.poster_path,
        rating: movieData.vote_average,
        releaseYear: movieData.release_date.split('-')[0],
        genres: movieData.genres,
        description: movieData.overview
    };
};

export const getMovieDetails = () => formatMovieData(movieData);

export const getMovies = () => formatMovies(moviesArray);
