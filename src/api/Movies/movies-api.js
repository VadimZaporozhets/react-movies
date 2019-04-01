import { moviesArray } from './mockData';
import { movieData } from './mockData';

export const movieService = {
    getMovies: function() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(moviesArray);
            }, 1000);
        });
    },
    getMovieById: function() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(movieData);
            }, 1000);
        });
    }
};
