import React, { useState } from 'react';
import { SHOP_DATA } from '../../data';
import CollectionPreview
   from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = () => {
   const [collections] = useState(SHOP_DATA);
   return (
      <div>
         {collections.map(({ id, ...otherProps }) =>
            <CollectionPreview key={id}
                               {...otherProps}/>)}
      </div>
   );
};

export default ShopPage;
