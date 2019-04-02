export const formatMovies = moviesArr => {
    return moviesArr.map(({ id, title, poster_path, release_date, genres }) => {
        return {
            id,
            title,
            poster_path,
            releaseYear: release_date.split('-')[0],
            genres
        };
    });
};
