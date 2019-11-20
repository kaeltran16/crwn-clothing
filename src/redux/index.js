import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import userReducer from './user/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({
   user: userReducer
});

const middlewares = [logger];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

