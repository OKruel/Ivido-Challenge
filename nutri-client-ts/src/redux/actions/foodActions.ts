import axios from 'axios';
import { Dispatch } from "redux";
import { ActionTypes } from './actionTypes';
import { FoodInterface, FoodMethods } from '../reducers/foodReducer';

const url: string = 'http://localhost:5000/nutrition';


export interface FoodMethod {
    type: ActionTypes.FOOD_METHOD;
    payload: FoodMethods
}

export interface fetchAllActionInterface {

    type: ActionTypes.FETCH_ALL_FOOD,
    payload: FoodInterface[]
}

export const fetchAllFoodsAction = () => {
    return async (dispatch: Dispatch) => {

        const allFoods = await axios.get<FoodInterface[]>(url);

        dispatch({
            type: ActionTypes.FETCH_ALL_FOOD,
            payload: allFoods.data
        });
    };
};

export interface PostData {
    id?: string;
    name: string;
    type: string;
    calories: number;
}

export interface EditFoodInterface {

    type: ActionTypes.UPDATE_FOOD,
    payload: FoodInterface
}

export const addFoodAction = (data: PostData) => {
    return async (dispatch: Dispatch) => {

        console.log('Add food action', data)

        let updatedFood;

        if (data.id) {
            updatedFood = await axios.put<FoodInterface>(`${url}/${data.id}`, data);

            dispatch({
                type: ActionTypes.FOOD_METHOD,
                payload: FoodMethods.Edited
            })

            dispatch({
                type: ActionTypes.UPDATE_FOOD,
                payload: updatedFood.data
            })

        } else {
            updatedFood = await axios.post<FoodInterface>(url, data);

            dispatch({
                type: ActionTypes.FOOD_METHOD,
                payload: FoodMethods.Added
            })

            dispatch({
                type: ActionTypes.UPDATE_FOOD,
                payload: updatedFood.data
            })
        }

        dispatch({
            type: ActionTypes.UPDATE_UI
        });
    }
}

export interface ClearEditedFoodInterface {
    type: ActionTypes.CLEAR_UPDATED_FOOD,
    payload: FoodInterface
}

export const clearEditFood = (payload: FoodInterface) => {
    return async (dispatch: Dispatch) => {

        dispatch({
            type: ActionTypes.CLEAR_UPDATED_FOOD,
            payload
        })

        dispatch({
            type: ActionTypes.FOOD_METHOD,
            payload: FoodMethods.Edited
        })
    };
}

export interface ClearDBFood {
    type: ActionTypes.CLEAR_DB_FOOD,
    payload: FoodInterface
}

export const clearDBFood = (payload: FoodInterface) => {
    return async (dispatch: Dispatch) => {

        dispatch({
            type: ActionTypes.CLEAR_DB_FOOD,
            payload
        });
    };
};


export const deleteFood = (id: string) => {
    return async (dispatch: Dispatch) => {

        axios.delete(`${url}/${id}`)
            .then(res => {

                dispatch({
                    type: ActionTypes.UPDATE_UI
                });

                dispatch({
                    type: ActionTypes.UPDATE_FOOD,
                    payload: res.data
                })

                dispatch({
                    type: ActionTypes.FOOD_METHOD,
                    payload: FoodMethods.Deleted
                })
            })
            .catch(e => console.log(e))
    }
};


export interface EditFood {
    type: ActionTypes.EDIT_FOOD,
    payload: FoodInterface
}



export const editFood = (payload: FoodInterface) => {
    return async (dispatch: Dispatch) => {

        dispatch({
            type: ActionTypes.EDIT_FOOD,
            payload
        })
    }
}