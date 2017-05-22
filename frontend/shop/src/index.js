import React from 'react';
import ReactDOM from 'react-dom';

import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import TopNavComponent from './components/TopNavComponent';
import BallComponent from './components/BallComponent';
import FrontpageComponent from './components/FrontpageComponent';
import ItemDetailsComponent from './components/ItemDetailsComponent';
import AdminItemDetailsComponent from './components/admin/AdminItemDetailsComponent';
import AddItem from './components/admin/AddItem';
import CheckoutComponent from "./components/CheckoutComponent";
import CreateAccountComponent from './components/CreateAccountComponent'

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" >
          <IndexRoute component={ FrontpageComponent }/>
      </Route>
      <Route path="/type/:group/:type">
          <IndexRoute component={ BallComponent }/>
      </Route>
      <Route path="/group/:group">
          <IndexRoute component={ BallComponent }/>
      </Route>
      <Route path="/details/:group/:id">
          <IndexRoute component={ ItemDetailsComponent }/>
      </Route>
    <Route path="/admin/details/:group/:id">
      <IndexRoute component={ AdminItemDetailsComponent }/>
    </Route>
    <Route path="/admin/add">
      <IndexRoute component={ AddItem }/>
    </Route>
      <Route path="/CreateAccount">
          <IndexRoute component={ CreateAccountComponent}/>
      </Route>
      <Route path="/checkout">
          <IndexRoute component={ CheckoutComponent }/>
      </Route>
  </Router>,
    document.getElementById("app")
);

ReactDOM.render(
    <TopNavComponent/>,
    document.getElementById("topNav")
);
