import React from 'react';
import {
   CartItemContainer,
   CartItemDetails,
   CartItemImage,
   NameContainer
} from './styles';


const CartItem = ({ item }) => {
   const { imageUrl, price, name, quantity } = item;
   return (
      <CartItemContainer>
         <CartItemImage src={imageUrl} alt='item'/>
         <CartItemDetails>
            <NameContainer>{name}</NameContainer>
            <span>{quantity} x ${price}</span>
         </CartItemDetails>
      </CartItemContainer>
   );
};

export default CartItem;
