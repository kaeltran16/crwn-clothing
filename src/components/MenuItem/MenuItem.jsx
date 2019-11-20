import React from 'react';

import './styles.scss';
import { withRouter } from 'react-router-dom';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
   const handleClick = () => {
      history.push(`${match.url}${linkUrl}`);
   };

   return (
      <div className={`${size} menu-item`}>
         <div className='background-image'
              style={{ backgroundImage: `url(${imageUrl})` }}
              onClick={handleClick}/>
         <div className='content'>
            <h1 className='title'>
               {title}
            </h1>
            <span className='subtitle'>SHOP NOW</span>
         </div>
      </div>
   );
};

export default withRouter(MenuItem);
