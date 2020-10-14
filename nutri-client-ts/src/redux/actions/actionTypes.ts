import { fetchAllActionInterface } from './foodActions';
import { BackdropHideInterface, BackdropShowInterface } from './layoutActions';

export enum ActionTypes {
    FETCH_ALL_FOOD = 'FETCH_ALL_FOOD',
    DELETE_FOOD = 'DELETE_FOOD',
    UPDATE_FOOD = 'UPDATE_FOOD',
    BACKDROP_HIDE = 'BACKDROP_HIDE',
    BACKDROP_SHOW = 'BACKDROP_SHOW'
};


export type Action = fetchAllActionInterface | BackdropHideInterface | BackdropShowInterface;
