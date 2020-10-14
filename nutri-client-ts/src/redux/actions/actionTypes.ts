import { fetchAllActionInterface, EditFoodInterface, ClearEditedFoodInterface } from './foodActions';
import { BackdropHideInterface, BackdropShowInterface, UpdateUIInterface } from './layoutActions';

export enum ActionTypes {
    FETCH_ALL_FOOD = 'FETCH_ALL_FOOD',
    CLEAR_UPDATED_FOOD = 'CLEAR_UPDATED_FOOD',
    UPDATE_FOOD = 'UPDATE_FOOD',
    BACKDROP_HIDE = 'BACKDROP_HIDE',
    BACKDROP_SHOW = 'BACKDROP_SHOW',
    UPDATE_UI = 'UPDATE_UI'
};


export type Action = ClearEditedFoodInterface | EditFoodInterface | fetchAllActionInterface | BackdropHideInterface | BackdropShowInterface | UpdateUIInterface;
