export const selectDetails = store => store.movieDetails.data;

export const selectLoadingDetails = store => store.movieDetails.loadingDetails;

export const selectLoadingMovies = store => store.movieDetails.loadingMovies;

export const selectDetailsError = store => store.movieDetails.error;

export const selectSimilarMovies = store => store.movieDetails.similarMovies;
