import { moviesArray } from './mockData';
import { movieData } from './mockData';

class MovieService {
    getMovies = () => {
        return this._apiCall(moviesArray);
    };

    getMovieById = () => {
        return this._apiCall(movieData);
    };

    _apiCall = data => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    };
}

export const movieService = new MovieService();
