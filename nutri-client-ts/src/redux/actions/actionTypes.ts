import { fetchAllActionInterface } from './foodActions';

export enum ActionTypes {
    FETCH_ALL_FOOD = 'FETCH_ALL_FOOD',
    DELETE_FOOD = 'DELETE_FOOD',
    UPDATE_FOOD = 'UPDATE_FOOD'
};

export type Action = fetchAllActionInterface;
