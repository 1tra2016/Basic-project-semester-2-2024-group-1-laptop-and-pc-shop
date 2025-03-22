import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ShopProvider from './utils/context';

ReactDOM.render(
  <Router>
    <ShopProvider>
      <App />
    </ShopProvider>
  </Router>,
  document.getElementById('root')
);
