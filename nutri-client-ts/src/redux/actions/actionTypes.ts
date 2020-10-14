import { fetchAllActionInterface, EditFoodInterface } from './foodActions';
import { BackdropHideInterface, BackdropShowInterface, UpdateUIInterface } from './layoutActions';

export enum ActionTypes {
    FETCH_ALL_FOOD = 'FETCH_ALL_FOOD',
    DELETE_FOOD = 'DELETE_FOOD',
    UPDATE_FOOD = 'UPDATE_FOOD',
    BACKDROP_HIDE = 'BACKDROP_HIDE',
    BACKDROP_SHOW = 'BACKDROP_SHOW',
    UPDATE_UI = 'UPDATE_UI'
};


export type Action = EditFoodInterface | fetchAllActionInterface | BackdropHideInterface | BackdropShowInterface | UpdateUIInterface;
