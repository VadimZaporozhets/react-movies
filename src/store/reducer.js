import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { movies } from '../Home/store/Movies';
import { movieDetails } from '../Details/store/Details';
import { MoviesFeature } from '../Home/store/Movies/movies.feature';
import { DetailsFeature } from '../Details/store/Details/details.feature';

export const reducer = history =>
    combineReducers({
        router: connectRouter(history),
        [MoviesFeature.name]: movies,
        [DetailsFeature.name]: movieDetails
    });
