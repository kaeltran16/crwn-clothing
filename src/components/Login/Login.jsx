import React, { useState } from 'react';

import './styles.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { signInWithGoogle } from '../../firebase/utils';


const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = e => {
      e.preventDefault();
   };

   const handleChange = (e, setter) => {
      const { value } = e.target;
      setter(value);
   };
   return (
      <div className='login'>
         <h2>I already have an account</h2>
         <span>Log in with your email and password</span>

         <form onSubmit={e => handleSubmit(e)}>
            <FormInput name='email' type='email' value={email} required
                       handleChange={e => handleChange(e, setEmail)}
                       label='Email'/>

            <FormInput name='password' type='password' value={password} required
                       handleChange={e => handleChange(e, setPassword)}
                       label='Password'/>
            <div className='buttons'>
               <Button type='submit'>Login</Button>
               <Button type='button' onClick={signInWithGoogle} isGoogleSignIn>
                  Login with Google
               </Button>
            </div>
         </form>
      </div>
   );
};
export default Login;
