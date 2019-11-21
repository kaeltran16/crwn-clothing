import { actionTypes } from './cartActions';
import { addItemToCart } from './utils';

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
      default:
         return state;
   }
};
export default cartReducer;
