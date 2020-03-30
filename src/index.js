import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
  <Switch>
   <Route exact path='/' component={App} />
   {/* <Route exact path='/attribution' component={Attribution} /> */}
   {/* <Route component={NotFound} /> */}
  </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);


