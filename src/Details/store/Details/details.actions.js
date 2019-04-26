import { DetailsFeature } from './details.feature';

export const FETCH_DETAILS = 'FETCH_DETAILS';
export const FETCH_DETAILS_SUCCESS = 'FETCH_DETAILS_SUCCESS';
export const FETCH_DETAILS_ERROR = 'FETCH_DETAILS_ERROR';

export const fetchDetails = DetailsFeature.ActionCreator(FETCH_DETAILS);

export const fetchDetailsSuccess = DetailsFeature.ActionCreator(
    FETCH_DETAILS_SUCCESS
);

export const fetchDetailsError = DetailsFeature.ActionCreator(
    FETCH_DETAILS_ERROR
);
