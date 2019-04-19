import axios from 'axios';

const BASE_URL = 'https://reactjs-cdp.herokuapp.com/movies';

class MovieService {
    getMovies = ({ search, searchBy, limit } = {}) => {
        const searchParam = search || '';
        const limitParam = limit || 10;
        const searchByParam = searchBy || 'title';
        return axios.get(
            `${BASE_URL}?search=${searchParam}&searchBy=${searchByParam}&limit=${limitParam}`
        );
    };

    getMovieById = id => {
        return axios.get(`${BASE_URL}/${id}`);
    };
}

export const movieService = new MovieService();
