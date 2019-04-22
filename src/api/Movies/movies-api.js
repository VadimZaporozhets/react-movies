import axios from 'axios';

const BASE_URL = 'https://reactjs-cdp.herokuapp.com/movies';

const defaultParams = {
    search: '',
    limit: 10,
    searchBy: 'title'
};

class MovieService {
    getMovies = ({ search, searchBy, limit } = defaultParams) => {
        return axios.get(
            `${BASE_URL}?search=${search}&searchBy=${searchBy}&limit=${limit}`
        );
    };

    getMovieById = id => {
        return axios.get(`${BASE_URL}/${id}`);
    };
}

export const movieService = new MovieService();
