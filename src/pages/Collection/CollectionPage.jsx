import React from 'react';

import './styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shopSelectors';

const CollectionPage = ({ match, collection }) => {
   console.log(collection);
   return (
      <div className='collection-page'>
         <h2>Category Page</h2>
      </div>
   );
};

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
