import React from 'react';
import {render} from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import TopNavComponent from './components/TopNavComponent';
import BallComponent from './components/BallComponent';
import FrontpageComponent from './components/FrontpageComponent';
import ItemDetailsComponent from './components/ItemDetailsComponent';
import CheckoutComponent from './components/CheckoutComponent';

render(
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
      <Route path="/checkout">
          <IndexRoute component={ CheckoutComponent }/>
      </Route>
  </Router>,
    document.getElementById("app")
);

render(
    <TopNavComponent/>,
    document.getElementById("topNav")
);
