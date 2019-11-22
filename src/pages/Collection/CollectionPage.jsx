import React from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelectors';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import {
   CollectionContainer,
   CollectionItems,
   CollectionTitle
} from './styles';

const CollectionPage = ({ collection }) => {
   const { title, items } = collection;
   return (
      <CollectionContainer>
         <CollectionTitle>{title}</CollectionTitle>
         <CollectionItems>
            {items.map(item =>
               <CollectionItem key={item.id} item={item}/>)}
         </CollectionItems>
      </CollectionContainer>
   );
};

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
