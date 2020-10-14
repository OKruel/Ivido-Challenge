import { ActionTypes, Action } from '../actions/actionTypes';

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

// const initialState: FoodReducerInterface = {
//         name: string;
//         type: FoodCategories;
//         calories: number
// }

export const foodReducer = (state: FoodReducerInterface[] = [], action: Action) => {

    switch (action.type) {

        case ActionTypes.FETCH_ALL_FOOD:
            return {
                ...state,
                ...action.payload 
            }

        default:
            return state;;
    }
}

