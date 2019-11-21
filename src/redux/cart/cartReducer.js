import { actionTypes } from './cartActions';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from './utils';

const initialState = {
   hidden: true,
   cartItems: []
};

const cartReducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.TOGGLE_CART_HIDDEN:
         return {
            ...state,
            hidden: !state.hidden
         };
      case actionTypes.ADD_CART_ITEM: {
         return {
            ...state,
            cartItems: addItemToCart(state.cartItems, action.payload)
         };
      }
      case actionTypes.REMOVE_CART_ITEM: {
         return {
            ...state,
            cartItems: removeItemFromCart(state.cartItems, action.payload)
         };
      }
      case actionTypes.CLEAR_CART_ITEM:
         return {
            ...state,
            cartItems: clearItemFromCart(state.cartItems, action.payload)
         };

      default:
         return state;
   }
};
export default cartReducer;
