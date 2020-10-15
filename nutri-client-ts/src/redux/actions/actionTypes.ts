import { fetchAllActionInterface, EditFoodInterface, ClearEditedFoodInterface, FoodMethod } from './foodActions';
import { BackdropHideInterface, BackdropShowInterface, UpdateUIInterface } from './layoutActions';

export enum ActionTypes {
    FETCH_ALL_FOOD = 'FETCH_ALL_FOOD',
    CLEAR_UPDATED_FOOD = 'CLEAR_UPDATED_FOOD',
    UPDATE_FOOD = 'UPDATE_FOOD',
    FOOD_METHOD = 'FOOD_METHOD',
    BACKDROP_HIDE = 'BACKDROP_HIDE',
    BACKDROP_SHOW = 'BACKDROP_SHOW',
    UPDATE_UI = 'UPDATE_UI'
};


export type Action = FoodMethod | ClearEditedFoodInterface | EditFoodInterface | fetchAllActionInterface | BackdropHideInterface | BackdropShowInterface | UpdateUIInterface;
