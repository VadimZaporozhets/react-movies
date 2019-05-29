import { routesPaths } from '../routes';

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

export const formatSearchRoute = (search, searchBy) =>
    routesPaths.SEARCH.replace(':searchQuery', search).replace(
        ':searchBy',
        searchBy
    );
