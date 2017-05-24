import React from 'react';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import Bowling from '../../public/images/bowling.jpg'
import Soccer from '../../public/images/soccer.jpg'
import Tennis from '../../public/images/tennis.jpg'

export default class CarouselComponent extends React.Component{

    render(){
        return(
            <div style={{height:400}}>
                <React_Bootstrap_Carousel
                    animation={true}
                    onSelect={this.onSelect}
                    className="carousel-fade"
                    slideshowSpeed="3000"
                >
                    <div style={{height: "100%", width: "100%", backgroundImage: "url(" + Bowling + ")"}}/>
                    <div style={{height: "100%", width: "100%", backgroundImage: "url(" + Soccer + ")"}}/>
                    <div style={{height: "100%", width: "100%", backgroundImage: "url(" + Tennis + ")"}}/>
                </React_Bootstrap_Carousel>
            </div>
        )
    }

}