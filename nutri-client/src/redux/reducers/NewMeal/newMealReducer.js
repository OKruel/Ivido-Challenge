import * as ACTION_TYPES from '../../actions/actionTypes';

const initialState = {
    newMeal: ''
};

const newMealReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.NEW_MEAL:
            return {
                ...state,
                newMeal: !state.newMeal
            };
        default:
            return state;
    };
};

export default newMealReducer;