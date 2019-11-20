import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { auth, createUserProfileDocument } from '../../firebase/utils';

import './styles.scss';

const Register = () => {
   const [displayName, setDisplayName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const handleSubmit = async e => {
      e.preventDefault();

      if (password !== confirmPassword) {
         alert(`password do no match`);
         return;
      }

      try {
         const { user } = await auth.createUserWithEmailAndPassword(email, password);

         await createUserProfileDocument(user, displayName);
      } catch (e) {
         console.error(`cannot create new user: ${e}`);
      }
   };

   const handleChange = (e, setter) => {
      const { value } = e.target;

      setter(value);
   };

   return (
      <div className='sign-up'>
         <h2 className='title'>I do not an account</h2>
         <span>Sign up with your email and password</span>

         <form className='sign-up-form' onSubmit={e => handleSubmit(e)}>
            <FormInput type='text' name='displayName' value={displayName}
                       label='Display Name' required
                       handleChange={e => handleChange(e, setDisplayName)}/>

            <FormInput type='email' name='email' value={email}
                       label='Email' required
                       handleChange={e => handleChange(e, setEmail)}/>

            <FormInput type='password' name='password' value={password}
                       label='Password' required
                       handleChange={e => handleChange(e, setPassword)}/>

            <FormInput type='password' name='confirmPassword'
                       value={confirmPassword}
                       label='Confirm Password' required
                       handleChange={e => handleChange(e, setConfirmPassword)}/>

            <Button type='submit'>Register</Button>
         </form>
      </div>
   );
};

export default Register;
