import React from 'react';
import Content from "./Content";
import FooterComponent from "./FooterComponent";
import MiddleNavComponent from "./MiddleNavComponent";
import TopNavComponent from "./TopNavComponent";
import CarouselComponent from "./CarouselComponent";

export default class BallShop extends React.Component{

    render(){
        return(
            <div>
                <div class="container">
                    <TopNavComponent/>
                </div>
                <CarouselComponent/>
                <div className="container-fullwidth">
                    <MiddleNavComponent/>
                </div>

                <div className="colorGray">
                    <Content/>
                    <FooterComponent/>
                </div>
            </div>
        )
    }

}