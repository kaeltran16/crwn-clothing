import React from 'react';
import {
   addCartItem,
   clearCartItem,
   removeCartItem
} from '../../redux/cart/cartActions';
import { connect } from 'react-redux';
import {
   Arrow,
   CheckoutItemContainer,
   ImageContainer,
   NameContainer,
   PriceContainer,
   QuantityContainer,
   RemoveButton,
   ValueContainer
} from './styles';

const CheckoutItem = ({ item, clearCartItem, addCartItem, removeCartItem }) => {
   const { name, quantity, price, imageUrl } = item;

   return (
      <CheckoutItemContainer>
         <ImageContainer>
            <img src={imageUrl} alt='checkout-item'/>
         </ImageContainer>
         <NameContainer>{name}</NameContainer>
         <QuantityContainer>
            <Arrow
               onClick={() => removeCartItem(item)}>&#10094;</Arrow>
            <ValueContainer>{quantity}</ValueContainer>
            <Arrow
               onClick={() => addCartItem(item)}>&#10095;</Arrow>
         </QuantityContainer>
         <PriceContainer>{price}</PriceContainer>
         <RemoveButton
            onClick={() => clearCartItem(item)}>
            &#10005;
         </RemoveButton>
      </CheckoutItemContainer>
   );
};

const mapDispatchToProps = dispatch => ({
   clearCartItem: item => dispatch(clearCartItem(item)),
   addCartItem: item => dispatch(addCartItem(item)),
   removeCartItem: item => dispatch(removeCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
