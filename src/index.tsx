import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}/>
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root')
);
