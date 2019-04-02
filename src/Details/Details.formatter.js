export const formatMovieData = ({
    title,
    poster_path,
    vote_average,
    release_date,
    genres,
    overview
}) => {
    return {
        title,
        poster_path,
        vote_average,
        releaseYear: release_date.split('-')[0],
        genres,
        overview
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
