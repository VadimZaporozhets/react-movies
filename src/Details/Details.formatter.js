export const formatMovieData = movieData => {
    return {
        title: movieData.title,
        poster_path: movieData.poster_path,
        rating: movieData.vote_average,
        releaseYear: movieData.release_date.split('-')[0],
        genres: movieData.genres,
        description: movieData.overview
    };
};

export const formatMovies = moviesArr => {
    return moviesArr.map(movie => {
        return {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            releaseYear: movie.release_date.split('-')[0],
            genres: movie.genres
        };
    });
};
