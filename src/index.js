import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';

const Main = () => (
   <Provider store={store}>
      <BrowserRouter>
         <App/>
      </BrowserRouter>
   </Provider>
);

ReactDOM.render(<Main/>, document.getElementById('root'));

