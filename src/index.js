import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ProductProvider} from '../src/assest/component/context'

ReactDOM.render(
  <ProductProvider>
     <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>,
  document.getElementById('root')
);
