import React, { useEffect } from 'react';
import './App.css';
import { HomePage } from './pages';
import { Redirect, Route, Switch } from 'react-router-dom';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import { auth, createUserProfileDocument } from './firebase/utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';
import AuthPage from './pages/Auth/AuthPage';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/userSelectors';
import CheckoutPage from './pages/Checkout/CheckoutPage';

const App = ({ currentUser, setCurrentUser }) => {
   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async userAuth => {
         if (userAuth !== null) {
            const userRef = await createUserProfileDocument(userAuth, null);

            userRef.onSnapshot(snapshot => {
               const newUser = {
                  id: snapshot.id,
                  ...snapshot.data()
               };

               setCurrentUser(newUser);
            });
         }

         setCurrentUser(userAuth);
      });

      return () => {
         unsubscribe();
      };
   }, [setCurrentUser]);

   return (
      <div>
         <Header/>
         <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/login'
                   render={() => currentUser ? <Redirect to='/'/> :
                      <AuthPage/>}/>
            <Route path='/checkout' component={CheckoutPage}/>
         </Switch>
      </div>
   );
};

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
   setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
