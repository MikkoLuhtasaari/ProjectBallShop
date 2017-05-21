import React from 'react';
import BallComponent from '../components/BallComponent'

export default class FrontPageComponent extends React.Component{
    render(){
        return (
            <div>
                <BallComponent group={"targetsportsballs"}/>
                <BallComponent group={"goalsportsballs"}/>
                <BallComponent group={"batandraquetsgames"}/>
                <BallComponent group={"netsportsballs"}/>
            </div>
        );
    }
}