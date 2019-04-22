import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { movies } from '../Home/store/Movies';
import { movieDetails } from '../Details/store/Details';

export const reducer = history =>
    combineReducers({
        router: connectRouter(history),
        movies,
        movieDetails
    });
