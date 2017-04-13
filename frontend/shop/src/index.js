import React from 'react';
import {render} from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import BallComponent from './components/BallComponent';
import FrontpageComponent from './components/FrontpageComponent';

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
  </Router>,
    document.getElementById("app")
);

// TODO Router does NOT update unless refreshed!!! More info: https://github.com/ReactTraining/react-router/issues/292