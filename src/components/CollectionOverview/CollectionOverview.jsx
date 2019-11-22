import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionReview } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { CollectionOverviewContainer } from './styles';

const CollectionOverview = ({ collections }) => {
   return (
      <CollectionOverviewContainer>
         {collections.map(({ id, ...otherProps }) =>
            <CollectionPreview key={id} {...otherProps}/>)}
      </CollectionOverviewContainer>
   );
};

const mapStateToProps = createStructuredSelector({
   collections: selectCollectionReview
});

export default connect(mapStateToProps)(CollectionOverview);
