import * as ACTION_TYPES from '../actionTypes';

export const editMealAction = payload => {
    return {
        type: ACTION_TYPES.EDIT_MEAL,
        payload
    }
};

export default editMealAction;