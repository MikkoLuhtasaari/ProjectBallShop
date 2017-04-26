import React from 'react';
import ReactDOM from 'react-dom';

import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import CartComponent from './components/TopNavComponent';
import BallComponent from './components/BallComponent';
import FrontpageComponent from './components/FrontpageComponent';
import ItemDetailsComponent from './components/ItemDetailsComponent';
import AdminItemDetailsComponent from './components/admin/AdminItemDetailsComponent';

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
  </Router>,
    document.getElementById("app")
);

ReactDOM.render(
    <CartComponent/>,
    document.getElementById("topNav")
);
