import { combineReducers } from 'redux';
import { movies } from '../Home/store/Movies';
import { movieDetails } from '../Details/store/Details';

export const reducer = combineReducers({ movies, movieDetails });
