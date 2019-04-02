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
