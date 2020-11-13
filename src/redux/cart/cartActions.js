export const actionTypes = {
   TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
   ADD_CART_ITEM: 'ADD_CART_ITEM',
   REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
   CLEAR_CART_ITEM: 'CLEAR_CART_ITEM',
   EMPTY_CART: 'EMPTY_CART'
};

export const toggleCartHidden = () => ({
   type: actionTypes.TOGGLE_CART_HIDDEN
});

export const emptyCart = () => ({
   type: actionTypes.EMPTY_CART
});

export const addCartItem = item => ({
   type: actionTypes.ADD_CART_ITEM,
   payload: item
});

export const clearCartItem = item => ({
   type: actionTypes.CLEAR_CART_ITEM,
   payload: item
});

export const removeCartItem = item => ({
   type: actionTypes.REMOVE_CART_ITEM,
   payload: item
});
