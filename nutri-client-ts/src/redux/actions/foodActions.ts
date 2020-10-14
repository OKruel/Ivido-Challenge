import axios from 'axios';
import { Dispatch } from "redux";
import { ActionTypes } from './actionTypes';
import { FoodReducerInterface } from '../reducers/foodReducer';

const url: string = 'http://localhost:5000/nutrition';

interface fetchAllActionInterface {
    type: ActionTypes.FETCH_ALL_FOOD,
    payload: FoodReducerInterface[]
}

export const fetchAllFoods = () => {

    return async (dispatch: Dispatch) => {

        const allFoods = await axios.get<FoodReducerInterface[]>(url)

        dispatch<fetchAllActionInterface>({
            type: ActionTypes.FETCH_ALL_FOOD,
            payload: allFoods.data
        });
    };
};