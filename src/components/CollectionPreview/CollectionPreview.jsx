import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import {
   CollectionPreviewContainer,
   CollectionTitle,
   PreviewContainer
} from './styles';


const CollectionPreview = ({ title, items }) => {
   return (
      <CollectionPreviewContainer>
         <CollectionTitle>{title}</CollectionTitle>
         <PreviewContainer>
            {items
               .filter((item, index) => index < 4)
               .map((item) => (
                  <CollectionItem key={item.id} item={item}/>
               ))}
         </PreviewContainer>
      </CollectionPreviewContainer>
   );
};

export default CollectionPreview;
