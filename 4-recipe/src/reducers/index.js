import recipeReducer from './recipe';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    recipe: recipeReducer
});

export default rootReducer;