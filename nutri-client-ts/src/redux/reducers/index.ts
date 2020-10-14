import { combineReducers } from 'redux';
import { FoodReducerInterface, foodReducer } from './foodReducer';

//Describe all the types os the intire Redux State
export interface StoreStateInterface {
    foodReducer: FoodReducerInterface[]
}

export const rootReducer = combineReducers<StoreStateInterface>({
    foodReducer
});