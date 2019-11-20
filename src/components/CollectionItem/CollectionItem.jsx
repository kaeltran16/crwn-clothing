import React from 'react';

import './styles.scss';
import Button from '../Button/Button';
import { addCartItem } from '../../redux/cart/cartActions';
import { connect } from 'react-redux';

const CollectionItem = ({ item, addCartItem }) => {
   const { name, price, imageUrl } = item;
   return (
      <div className='collection-item'>
         <div className='image'
              style={{ backgroundImage: `url(${imageUrl})` }}/>
         <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
         </div>

         <Button inverted onClick={() => addCartItem(item)}>ADD TO CART</Button>
      </div>
   );
};

const mapDispatchToProps = dispatch => ({
   addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
