import React from 'react';
import Content from "./Content";
import FooterComponent from "./FooterComponent";
import MiddleNavComponent from "./MiddleNavComponent";

export default class BallShop extends React.Component{

    render(){
        return(
            <div>
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