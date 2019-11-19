import React, { useEffect, useState } from 'react';
import './App.css';
import { HomePage } from './pages';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/Shop/ShopPage';
import Header from './components/Header/Header';
import AuthPage from './pages/Auth/Auth';
import { auth } from './firebase/utils';

const App = () => {
   const [user, setUser] = useState(null);
   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(currentUser => {
         console.log(currentUser);
         setUser(currentUser);
      });

      return () => {
         unsubscribe();
      };
   }, []);

   return (
      <div>
         <Header user={user}/>
         <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/login' component={AuthPage}/>
         </Switch>
      </div>
   );
};

export default App;
