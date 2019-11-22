import React from 'react';

import { withRouter } from 'react-router-dom';
import {
   MenuItemContainer,
   MenuItemContent,
   MenuItemImage,
   MenuItemSubTitle,
   MenuItemTitle
} from './styles';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
   console.log(size);
   const handleClick = () => {
      history.push(`${match.url}${linkUrl}`);
   };

   return (
      <MenuItemContainer size={size}>
         <MenuItemImage
            imageUrl={imageUrl}
            onClick={handleClick}/>
         <MenuItemContent>
            <MenuItemTitle>
               {title}
            </MenuItemTitle>
            <MenuItemSubTitle>SHOP NOW</MenuItemSubTitle>
         </MenuItemContent>
      </MenuItemContainer>
   );
};

export default withRouter(MenuItem);
