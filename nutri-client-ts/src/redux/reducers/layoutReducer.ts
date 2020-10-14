import { ActionTypes, Action } from '../actions/actionTypes';

export interface layoutState {
    backdrop: boolean
}

const initialState: layoutState = {
    backdrop: false
}


export const layoutReducer = (state: layoutState = initialState, action: Action) => {
    switch (action.type) {
        case ActionTypes.BACKDROP_HIDE:
            return {
                ...state,
                backdrop: false
            }

        case ActionTypes.BACKDROP_SHOW:
            return {
                ...state,
                backdrop: true
            }
        default:
            return state;
    };
};
