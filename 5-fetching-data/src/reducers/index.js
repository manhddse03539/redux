import listReducer from './list';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    list: listReducer
});

export default rootReducer;