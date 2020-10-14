import { ActionTypes, Action } from '../actions/actionTypes';

enum FoodCategories {
    Carbohydrate = 'Carbohydrate',
    Protein = 'Protein',
    Fat = 'Fat',
}

export interface FoodInterface {
        id: string;
        name: string;
        type: FoodCategories;
        calories: number
}

export interface FoodReducerState {
    foods: FoodInterface[];

}

const initialState: FoodReducerState = {
    foods: []
}

export const foodReducer = (state: FoodReducerState = initialState , action: Action) => {

    switch (action.type) {

        case ActionTypes.FETCH_ALL_FOOD:
            return {
                ...state,
                foods: action.payload
            }

        default:
            return state;;
    }
}

