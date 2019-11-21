import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux';
import './index.css';
import App from './App';

const Main = () => (
   <Provider store={store}>
      <BrowserRouter>
         <PersistGate loading={false} persistor={persistor}>
            <App/>
         </PersistGate>
      </BrowserRouter>
   </Provider>
);

ReactDOM.render(<Main/>, document.getElementById('root'));

