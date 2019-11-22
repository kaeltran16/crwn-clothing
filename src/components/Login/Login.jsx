import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { auth, signInWithGoogle } from '../../firebase/utils';
import { LoginButtons, LoginContainer, LoginTitle } from './styles';


const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = async e => {
      e.preventDefault();

      try {
         await auth.signInWithEmailAndPassword(email, password);
      } catch (e) {
         console.error(`cannot sign in: ${e}`);
      }
   };

   const handleChange = (e, setter) => {
      const { value } = e.target;
      setter(value);
   };
   return (
      <LoginContainer>
         <LoginTitle>I already have an account</LoginTitle>
         <span>Log in with your email and password</span>

         <form onSubmit={e => handleSubmit(e)}>
            <FormInput name='email' type='email' value={email} required
                       handleChange={e => handleChange(e, setEmail)}
                       label='Email'/>

            <FormInput name='password' type='password' value={password} required
                       handleChange={e => handleChange(e, setPassword)}
                       label='Password'/>
            <LoginButtons>
               <Button type='submit'>Login</Button>
               <Button type='button' onClick={signInWithGoogle} isGoogleSignIn>
                  Login with Google
               </Button>
            </LoginButtons>
         </form>
      </LoginContainer>
   );
};
export default Login;
