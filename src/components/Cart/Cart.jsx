import React from 'react';

import './styles.scss';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const Cart = ({ cartItems, history, dispatch }) => {
   const handleCheckout = () => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
   };
   return (
      <div className='cart-dropdown'>
         <div className='cart-items'>
            {cartItems.length > 0 ?
               cartItems.map(item =>
                  <CartItem item={item} key={item.id}/>
               ) : <span className='empty-message'>Your cart is empty</span>}
         </div>
         <Button onClick={handleCheckout}>
            CHECKOUT
         </Button>
      </div>
   );
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
