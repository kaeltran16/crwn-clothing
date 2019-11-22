import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemCount } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { CartIconContainer, ItemCount, ShoppingIcon } from './styles';

const CartIcon = ({ itemCount, toggleCartHidden }) => {
   return (
      <CartIconContainer onClick={toggleCartHidden}>
         <ShoppingIcon/>
         <ItemCount className='item-count'>{itemCount}</ItemCount>
      </CartIconContainer>
   );
};

const mapStateToProps = createStructuredSelector({
   itemCount: selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
