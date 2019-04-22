export const selectDetails = store => store.movieDetails.data;

export const selectLoadingDetails = store => store.movieDetails.loadingDetails;

export const selectLoadingMovies = store => store.movieDetails.loadingMovies;

export const selectDetailsError = store => store.movieDetails.detailsError;

export const selectSimilarMoviesError = store =>
    store.movieDetails.similarMoviesError;

export const selectSimilarMovies = store => store.movieDetails.similarMovies;
