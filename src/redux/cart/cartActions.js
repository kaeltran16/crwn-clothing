export const actionTypes = {
   TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
   ADD_CART_ITEM: 'ADD_CART_ITEM'
};

export const toggleCartHidden = () => ({
   type: actionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
   type: actionTypes.ADD_CART_ITEM,
   payload: item
});

