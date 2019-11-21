import { applyMiddleware, combineReducers, createStore } from 'redux';
import userReducer from './user/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './cart/cartReducer';

export const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer
});

const middlewares = [];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

