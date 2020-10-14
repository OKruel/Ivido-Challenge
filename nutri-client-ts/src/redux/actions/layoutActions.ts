import { ActionTypes } from './actionTypes';

export interface BackdropShowInterface {
    type: ActionTypes.BACKDROP_SHOW,
}

export interface BackdropHideInterface {
    type: ActionTypes.BACKDROP_HIDE,
}

export const backdropShow = () => {
    return {
        type: ActionTypes.BACKDROP_SHOW
    }
}

export const backdropHide = () => {
    return {
        type: ActionTypes.BACKDROP_HIDE
    }
}

