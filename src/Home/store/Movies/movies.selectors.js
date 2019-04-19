export const selectMovies = store => store.movies.data;

export const selectMoviesLoading = store => store.movies.loading;

export const selectMoviesFetchError = store => store.movies.error;

export const selectMoviesTotal = store => store.movies.total;
