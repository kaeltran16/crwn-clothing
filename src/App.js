import React from 'react';
import './App.css';
import { HomePage } from './pages';
import { Route } from 'react-router-dom';
import ShopPage from './pages/Shop/ShopPage';

function App() {
   return (
      <div>
         <Route exact path='/' component={HomePage}/>
         <Route path='/shop' component={ShopPage}/>
      </div>
   );
}

export default App;
