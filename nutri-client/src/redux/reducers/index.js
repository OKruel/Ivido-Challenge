import { combineReducers } from 'redux';
import editMealReducer from './EditMeal/editMealReducer';
import newMealReducer from './NewMeal/newMealReducer';

const rootReducer = combineReducers({
    editMealReducer,
    newMealReducer
})

export default rootReducer;