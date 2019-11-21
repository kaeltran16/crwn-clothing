export const addItemToCart = (cartItems, addItem) => {
   const existing = cartItems.find(item => item.id === addItem.id);

   if (existing) {
      return cartItems.map(item => (item.id === addItem.id) ? {
         ...item,
         quantity: item.quantity + 1
      } : item);
   }

   return [...cartItems, { ...addItem, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, removeItem) => {
   return cartItems.filter(item => item.id !== removeItem.id);
};

export const removeItemFromCart = (cartItems, removeItem) => {
   const existing = cartItems.find(item => item.id === removeItem.id);

   if (existing) {
      const removed = cartItems.map(item => (item.id === removeItem.id) ? {
         ...item,
         quantity: item.quantity > 0 ? item.quantity - 1 : 0
      } : item);

      return removed.filter(item => item.quantity !== 0);
   }
};
