import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './styles.scss';
import { auth } from '../../firebase/utils';

const Header = ({ user }) => {
   return (
      <div className='header'>
         <Link className='logo-container' to='/'>
            <Logo className='logo'/>
         </Link>
         <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {user
               ? <div className='option' onClick={() => auth.signOut()}>
                  LOG OUT
               </div>
               : <Link className='option' to='/login'>LOG IN</Link>}
         </div>
      </div>
   );
};

export default Header;
