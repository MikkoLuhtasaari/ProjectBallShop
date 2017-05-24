import React from 'react';
import Content from "./Content";
import FooterComponent from "./FooterComponent";
import MiddleNavComponent from "./MiddleNavComponent";
import TopNavComponent from "./TopNavComponent";
import CarouselComponent from "./CarouselComponent";

export default class BallShop extends React.Component{
    constructor(props) {
        super(props);
        this.state = { updated: false};
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate(updated) {
        this.setState({updated : updated})
    }

    render(){
        return(
            <div>
                <div className="container">
                    <TopNavComponent updated={false}/>
                </div>
                <CarouselComponent/>
                <div className="container-fullwidth">
                    <MiddleNavComponent/>
                </div>

                <div className="colorGray">
                    <Content handleUpdate={this.handleUpdate} />
                    <FooterComponent/>
                </div>
            </div>
        )
    }

}