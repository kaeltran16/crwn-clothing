import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import Cart from '../Cart/Cart';
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import {
   HeaderContainer,
   LogoContainer,
   Option,
   OptionContainer
} from './styles';

const Header = ({ currentUser, hidden }) => {
   return (
      <HeaderContainer>
         <LogoContainer to='/'>
            <Logo/>
         </LogoContainer>
         <OptionContainer>
            <Option to='/shop'>SHOP</Option>
            <Option to='/contact'>CONTACT</Option>
            {currentUser
               ? <Option as='div' onClick={() => auth.signOut()}>
                  LOG OUT
               </Option>
               : <Option to='/login'>LOG IN</Option>}
            <CartIcon/>
         </OptionContainer>
         {hidden ? null : <Cart/>}
      </HeaderContainer>
   );
};

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
