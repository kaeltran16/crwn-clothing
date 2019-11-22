import React from 'react';

import Button from '../Button/Button';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { CartContainer, CartItemContainer, EmptyMessage } from './styles';

const Cart = ({ cartItems, history, dispatch }) => {
   const handleCheckout = () => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
   };
   return (
      <CartContainer>
         <CartItemContainer>
            {cartItems.length > 0 ?
               cartItems.map(item =>
                  <CartItem item={item} key={item.id}/>
               ) : <EmptyMessage>Your cart is empty</EmptyMessage>}
         </CartItemContainer>
         <Button onClick={handleCheckout}>
            CHECKOUT
         </Button>
      </CartContainer>
   );
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
