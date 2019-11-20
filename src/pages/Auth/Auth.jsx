import React from 'react';
import './styles.scss';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const AuthPage = () => {
   return (
      <div className='auth'>
         <Login/>
         <Register/>
      </div>
   );
};

export default AuthPage;
