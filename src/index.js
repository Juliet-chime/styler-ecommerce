import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProductProvider} from '../src/assest/component/context'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <ProductProvider>
    <App />
  </ProductProvider>
  </Router>,
  
  document.getElementById('root')
);
