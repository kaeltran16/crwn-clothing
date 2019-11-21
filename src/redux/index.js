import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart']
};


export const rootReducer = persistReducer(persistConfig,
   combineReducers({
      user: userReducer,
      cart: cartReducer
   })
);

const middlewares = [];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);
