import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';

import './styles.scss';
import { SECTION_DATA } from '../../data';

const Directory = () => {
   const [sections] = useState(SECTION_DATA);
   return (
      <div className='directory-menu'>
         {sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps}/>
         ))}
      </div>
   );
};

export default Directory;
