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
    return moviesArr.map(
        ({ id, title, poster_path, release_date, genres, vote_average }) => {
            return {
                id,
                title,
                poster_path,
                releaseYear: release_date.split('-')[0],
                genres,
                vote_average
            };
        }
    );
};
