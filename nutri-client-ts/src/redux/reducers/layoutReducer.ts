import { ActionTypes, Action } from '../actions/actionTypes';

export interface layoutState {
    backdrop: boolean,
    updateUI: boolean
}

const initialState: layoutState = {
    backdrop: false,
    updateUI: false
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

        case ActionTypes.UPDATE_UI:
            return {
                ...state,
                updateUI: !state.updateUI
            }
        default:
            return state;
    };
};
