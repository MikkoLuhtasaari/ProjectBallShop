import React from 'react';
import ReactDOM from 'react-dom';
import TopNavComponent from './components/TopNavComponent';
import BallShop from "./components/BallShop";
import CarouselComponent from "./components/CarouselComponent";

ReactDOM.render(
    <TopNavComponent/>,
    document.getElementById("topNav")
);

ReactDOM.render(
    <CarouselComponent/>,
    document.getElementById("myCarousel")
);

ReactDOM.render(
    <BallShop/>,
    document.getElementById("root")
);
