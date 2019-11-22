import React from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import { AuthContainer } from './styles';

const AuthPage = () => {
   return (
      <AuthContainer>
         <Login/>
         <Register/>
      </AuthContainer>
   );
};

export default AuthPage;
