export const formatMovies = moviesArr => {
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
