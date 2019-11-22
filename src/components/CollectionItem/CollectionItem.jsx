import React from 'react';

import Button from '../Button/Button';
import { addCartItem } from '../../redux/cart/cartActions';
import { connect } from 'react-redux';
import {
   CollectionItemContainer,
   CollectionItemFooter,
   CollectionItemImage,
   NameContainer,
   PriceContainer
} from './styles';

const CollectionItem = ({ item, addCartItem }) => {
   const { name, price, imageUrl } = item;
   return (
      <CollectionItemContainer>
         <CollectionItemImage
            imageUrl={imageUrl}/>
         <CollectionItemFooter>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>${price}</PriceContainer>
         </CollectionItemFooter>

         <Button inverted onClick={() => addCartItem(item)}>ADD TO CART</Button>
      </CollectionItemContainer>
   );
};

const mapDispatchToProps = dispatch => ({
   addCartItem: item => dispatch(addCartItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
