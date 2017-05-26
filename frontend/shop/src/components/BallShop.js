import React from 'react';
import Routes from "./pageContent/Routes";
import Footer from "./footer/Footer";
import MiddleNavigation from "./middleNavigation/MiddleNavigation";
import TopNavigation from "./topNavigation/TopNavigation";
import CarouselComponent from "./carousel/Carousel";

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
                    <TopNavigation updated={false}/>
                </div>
                    <CarouselComponent/>
                <div className="container-fullwidth">
                    <MiddleNavigation/>
                </div>
                <div className="colorGray">
                    <Routes handleUpdate={this.handleUpdate} />
                    <Footer/>
                </div>
            </div>
        )
    }

}