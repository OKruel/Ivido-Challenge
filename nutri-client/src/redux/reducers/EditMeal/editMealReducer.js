import * as ACTION_TYPES from '../../actions/actionTypes';

const initialState = {
    editMeal: ''
};

const editMealReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.EDIT_MEAL:
            return {
                ...state,
                editMeal: action.payload
            };
        default:
            return state;
    };
};

export default editMealReducer;