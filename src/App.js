import Commerce from './assest/component/commerce';
import './App.css';
import{Switch, Route } from 'react-router-dom';
import Details from './assest/component/details';
import Cart  from './assest/component/cart';
import  PageNotFound  from './assest/component/lost';
import React from 'react';

function App() {
  return (
  <React.Fragment>
      <Switch>
        <Route path="/" exact component={Commerce}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={PageNotFound}/>
      </Switch>
  </React.Fragment>
    
    
  );
}

export default App;
