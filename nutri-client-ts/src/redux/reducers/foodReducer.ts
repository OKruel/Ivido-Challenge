import { ActionTypes, Action } from '../actions/actionTypes';

export enum FoodCategories {
    Carbohydrate = 'Carbohydrate',
    Protein = 'Protein',
    Fat = 'Fat',
}

export enum FoodMethods {
    Added = 'Added',
    Deleted = 'Deleted',
    Edited = 'Edited',
}
export interface FoodInterface {
    id: string;
    name: string;
    type: FoodCategories;
    calories: number
}

export interface FoodReducerState {
    foods: FoodInterface[];
    editFood: FoodInterface;
    foodMethod: FoodMethods

}

const initialState: FoodReducerState = {
    foods: [],
    editFood: {
        id: '',
        name: '',
        type: FoodCategories.Carbohydrate,
        calories: 0
    },
    foodMethod: FoodMethods.Edited
}

export const foodReducer = (state: FoodReducerState = initialState, action: Action) => {

    switch (action.type) {

        case ActionTypes.FETCH_ALL_FOOD:
            return {
                ...state,
                foods: action.payload
            }

        case ActionTypes.UPDATE_FOOD:
            return {
                ...state,
                editFood: action.payload
            }

        case ActionTypes.CLEAR_UPDATED_FOOD:
            return {
                ...state,
                editFood: action.payload
        }

        case ActionTypes.FOOD_METHOD:
            return {
                ...state,
                foodMethod: action.payload
        }

        default:
            return state;;
    }
}

