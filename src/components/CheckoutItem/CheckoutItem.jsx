import React from 'react';
import './styles.scss';
import {
   addCartItem,
   clearCartItem,
   removeCartItem
} from '../../redux/cart/cartActions';
import { connect } from 'react-redux';

const CheckoutItem = ({ item, clearCartItem, addCartItem, removeCartItem }) => {
   const { name, quantity, price, imageUrl } = item;

   return (
      <div className='checkout-item'>
         <div className='image-container'>
            <img src={imageUrl} alt='checkout-item'/>
         </div>
         <span className='name'>{name}</span>
         <span className='quantity'>
            <div className='arrow'
                 onClick={() => removeCartItem(item)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow'
                 onClick={() => addCartItem(item)}>&#10095;</div>
         </span>
         <span className='price'>{price}</span>
         <div onClick={() => clearCartItem(item)}
              className='remove-button'>&#10005;</div>
      </div>
   );
};

const mapDispatchToProps = dispatch => ({
   clearCartItem: item => dispatch(clearCartItem(item)),
   addCartItem: item => dispatch(addCartItem(item)),
   removeCartItem: item => dispatch(removeCartItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
