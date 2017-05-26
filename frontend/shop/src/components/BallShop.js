import React from 'react';
import Routes from "./pageContent/Routes";
import Footer from "./footer/Footer";
import MiddleNavigation from "./middleNavigation/MiddleNavigation";
import TopNavigation from "./topNavigation/TopNavigation";
import CarouselComponent from "./carousel/Carousel";

/**
 * Displays the whole page to user
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class BallShop extends React.Component{

    /**
     * Constructs the page and creates its status
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = { updated: false};
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    /**
     * Uploads page if shopping cart is updated
     *
     * @param updated
     */
    handleUpdate(updated) {
        this.setState({updated : updated})
    }

    /**
     * Renders the view and displays it to user
     *
     * @returns {XML}
     */
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