import { fetchAllActionInterface, EditFoodInterface, ClearEditedFoodInterface, FoodMethod, EditFood, ClearDBFood } from './foodActions';
import { BackdropHideInterface, BackdropShowInterface, UpdateUIInterface } from './layoutActions';

export enum ActionTypes {
    FETCH_ALL_FOOD = 'FETCH_ALL_FOOD',
    CLEAR_UPDATED_FOOD = 'CLEAR_UPDATED_FOOD',
    CLEAR_DB_FOOD = 'CLEAR_DB_FOOD',
    UPDATE_FOOD = 'UPDATE_FOOD',
    EDIT_FOOD = 'EDIT_FOOD',
    FOOD_METHOD = 'FOOD_METHOD',
    BACKDROP_HIDE = 'BACKDROP_HIDE',
    BACKDROP_SHOW = 'BACKDROP_SHOW',
    UPDATE_UI = 'UPDATE_UI'
};


export type Action = ClearDBFood | EditFood | FoodMethod | ClearEditedFoodInterface | EditFoodInterface | fetchAllActionInterface | BackdropHideInterface | BackdropShowInterface | UpdateUIInterface;
