import { combineReducers } from 'redux';
import { foodReducer } from './foodReducer';
import { layoutReducer } from './layoutReducer';


export const rootReducer = combineReducers({
    foodReducer,
    layoutReducer
});

export type RootState = ReturnType<typeof rootReducer>