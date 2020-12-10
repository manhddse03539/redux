import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'

const myMiddleware = store => next => action => {
    if (action.type === 'ADD_RECIPE' && action.payload.recipe.includes("fuck")) {
        action.payload.recipe = "****";
    }
    return next(action);
}
const store = createStore(rootReducer, applyMiddleware(myMiddleware));

export default store;