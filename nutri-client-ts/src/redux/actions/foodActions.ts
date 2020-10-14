import axios from 'axios';
import { Dispatch } from "redux";
import { ActionTypes } from './actionTypes';
import { FoodInterface } from '../reducers/foodReducer';

const url: string = 'http://localhost:5000/nutrition';


export interface fetchAllActionInterface {

    type: ActionTypes.FETCH_ALL_FOOD,
    payload: FoodInterface[]
}

export const fetchAllFoodsAction = () => {
    
    return async (dispatch: Dispatch) => {

        const allFoods = await axios.get<FoodInterface[]>(url);

        console.log('thunk', allFoods.data);

        dispatch<fetchAllActionInterface>({
            type: ActionTypes.FETCH_ALL_FOOD,
            payload: allFoods.data
        });
    };
};

export const addFoodAction = () => {
    
    return async (dispatch: Dispatch) => {

    }
}
