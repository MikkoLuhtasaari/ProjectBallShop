import React from 'react';
import ReactDOM from 'react-dom';
import TopNavComponent from './components/TopNavComponent';
import BallShop from "./components/BallShop";

ReactDOM.render(
    <TopNavComponent/>,
    document.getElementById("topNav")
);

ReactDOM.render(
    <BallShop/>,
    document.getElementById("root")
);
