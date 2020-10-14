import { ActionTypes } from '../actions/actionTypes';

enum FoodCategories {
    Carbohydrate = 'Carbohydrate',
    Protein = 'Protein',
    Fat = 'Fat',
}

export interface FoodReducerInterface {
    name: string;
    type: FoodCategories;
    calories: number
}

export const foodReducer = (
    state: FoodReducerInterface[] = [],
    action: ActionTypes
) => {
    switch (action) {
        default:
            return state;;
    }
}

