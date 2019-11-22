import React from 'react';

import { ButtonContainer } from './styles';

const Button = ({ children, ...otherProps }) => {
   return (
      <ButtonContainer
         {...otherProps}>
         {children}
      </ButtonContainer>
   );
};

export default Button;
