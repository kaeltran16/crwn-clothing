import React from 'react';

import './styles.scss';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';

const Cart = ({ cartItems }) => {
   return (
      <div className='cart-dropdown'>
         <div className='cart-items'>
            {cartItems.map(item =>
               <CartItem item={item} key={item.id}/>
            )}
         </div>
         <Button>GO TO CHECKOUT</Button>
      </div>
   );
};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

export default connect(mapStateToProps)(Cart);
