import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview
   from '../../components/CollectionOverview/CollectionOverview';
import CollectionPage from '../Collection/CollectionPage';
import {
   convertCollectionSnapshotToMap,
   firestore
} from '../../firebase/utils';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';
import withSpinner from '../../hocs/withSpinner';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {

   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const collectionRef = firestore.collection('collections');

      const collectionUnsubscribe = collectionRef.onSnapshot(async snapshot => {
         const collectionMap = convertCollectionSnapshotToMap(snapshot);
         updateCollections(collectionMap);
         setLoading(false);
      });
      return () => {
         collectionUnsubscribe();
      };
   }, []);
   return (
      <div className='shop-page'>
         <Route exact path={`${match.path}`}
                render={props => <CollectionOverviewWithSpinner
                   isLoading={loading} {...props}/>}/>
         <Route path={`${match.path}/:collectionId`}
                render={props => <CollectionPageWithSpinner
                   isLoading={loading} {...props}/>}/>
      </div>
   );
};

const mapDispatchToProps = dispatch => ({
   updateCollections: collections => dispatch(updateCollections(collections))
});


export default connect(null, mapDispatchToProps)(ShopPage);
