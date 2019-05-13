import { DetailsFeature } from './details.feature';

export const fetchDetails = DetailsFeature.ActionCreator('FETCH_DETAILS');

export const fetchDetailsSuccess = DetailsFeature.ActionCreator(
    'FETCH_DETAILS_SUCCESS'
);

export const fetchDetailsError = DetailsFeature.ActionCreator(
    'FETCH_DETAILS_ERROR'
);
