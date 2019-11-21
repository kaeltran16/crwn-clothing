import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemCount } from '../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ itemCount, toggleCartHidden }) => {
   return (
      <div className='cart-icon' onClick={toggleCartHidden}>
         <ShoppingIcon className='shopping-icon'/>
         <span className='item-count'>{itemCount}</span>
      </div>
   );
};

const mapStateToProps = createStructuredSelector({
   itemCount: selectCartItemCount
});

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
