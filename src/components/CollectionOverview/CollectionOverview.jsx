import React from 'react';

import './styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionReview } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionOverview = ({ collections }) => {
   return (
      <div className='collections-overview'>
         {collections.map(({ id, ...otherProps }) =>
            <CollectionPreview key={id} {...otherProps}/>)}
      </div>
   );
};

const mapStateToProps = createStructuredSelector({
   collections: selectCollectionReview
});

export default connect(mapStateToProps)(CollectionOverview);
