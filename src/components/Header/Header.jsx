import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './styles.scss';
import { auth } from '../../firebase/utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import Cart from '../Cart/Cart';

const Header = ({ currentUser, hidden }) => {
   return (
      <div className='header'>
         <Link className='logo-container' to='/'>
            <Logo className='logo'/>
         </Link>
         <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {currentUser
               ? <div className='option' onClick={() => auth.signOut()}>
                  LOG OUT
               </div>
               : <Link className='option' to='/login'>LOG IN</Link>}
            <CartIcon/>
         </div>
         {hidden ? null : <Cart/>}
      </div>
   );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
   currentUser,
   hidden
});

export default connect(mapStateToProps)(Header);