import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
   selectCartItems,
   selectCartTotal
} from '../../redux/cart/cartSelectors';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';
import {
   CheckoutContainer,
   CheckoutHeader,
   HeaderBlock,
   TotalPrice
} from './styles';

const CheckoutPage = ({ cartItems, total }) => {
   return (
      <CheckoutContainer>
         <CheckoutHeader>
            <HeaderBlock>
               <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
               <span>Remove</span>
            </HeaderBlock>
         </CheckoutHeader>
         {cartItems.map(cartItem =>
            <CheckoutItem key={cartItem.id}
                          item={cartItem}/>)}
         <TotalPrice>
            <span>{total}</span>
         </TotalPrice>
         <StripeButton price={total}/>
      </CheckoutContainer>
   );
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
