import React from 'react';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import Bowling from '../../../public/images/bowling.jpg'
import Soccer from '../../../public/images/soccer.jpg'
import Tennis from '../../../public/images/tennis.jpg'

/**
 * Creates carousel displayed at top of the page
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class Carousel extends React.Component{

    /**
     * Renders Carousel and displays it to user.
     *
     * @returns {XML}
     */
    render(){
        return(
            <div style={{height:400}}>
                <React_Bootstrap_Carousel animation={true} onSelect={this.onSelect}
                                          className="carousel-fade" slideshowSpeed="3000">
                    <div style={{height: "100%", width: "100%", backgroundImage: "url(" + Bowling + ")"}}/>
                    <div style={{height: "100%", width: "100%", backgroundImage: "url(" + Soccer + ")"}}/>
                    <div style={{height: "100%", width: "100%", backgroundImage: "url(" + Tennis + ")"}}/>
                </React_Bootstrap_Carousel>
            </div>
        )
    }

}