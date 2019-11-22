import React from 'react';
import MenuItem from '../MenuItem/MenuItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import { DirectoryMenuContainer } from './styles';

const Directory = ({ sections }) => {
   return (
      <DirectoryMenuContainer>
         {sections.map(({ id, ...otherProps }) => (
            <MenuItem key={id} {...otherProps}/>
         ))}
      </DirectoryMenuContainer>
   );
};

const mapStateToProps = createStructuredSelector({
   sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
