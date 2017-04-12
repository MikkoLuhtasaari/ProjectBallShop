import React from 'react';
import {render} from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router'

import Template from './Template';
import Footballs from './components/Footballs';
import Bowlingballs from './components/Bowlingballs'
import Chocolateballs from './components/Chocolateballs'
import Golfballs from './components/Golfballs'

render(
  <Router history={hashHistory}>
    <Route path="/" >
      <IndexRoute component={Template}/>
      <Route path="/footballs" component={Footballs}/>
      <Route path="/bowlingballs" component={Bowlingballs} />
      <Route path="/chocolateballs" component={Chocolateballs} />
      <Route path="/golfballs" component={Golfballs} />
    </Route>
  </Router>,
    document.getElementById("app")
);