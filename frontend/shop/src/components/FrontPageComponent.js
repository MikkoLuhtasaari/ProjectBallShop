import React from 'react';
import BallComponent from '../components/BallComponent'

export default class FrontPageComponent extends React.Component{
    render(){
        return (
        <div>
            <BallComponent group={"targetsportsballs"} handleUpdate={this.props.handleUpdate} />
            <BallComponent group={"goalsportsballs"} handleUpdate={this.props.handleUpdate} />
            <BallComponent group={"batandraquetsgames"} handleUpdate={this.props.handleUpdate} />
            <BallComponent group={"netsportsballs"} handleUpdate={this.props.handleUpdate} />
        </div>
        );
    }
}