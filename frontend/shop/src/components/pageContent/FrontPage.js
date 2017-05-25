import React from 'react';
import BallHandler from './BallHandler'

export default class FrontPage extends React.Component{
    render(){
        return (
        <div>
            <BallHandler group={"targetsportsballs"} handleUpdate={this.props.handleUpdate} />
            <BallHandler group={"goalsportsballs"} handleUpdate={this.props.handleUpdate} />
            <BallHandler group={"batandraquetsgames"} handleUpdate={this.props.handleUpdate} />
            <BallHandler group={"netsportsballs"} handleUpdate={this.props.handleUpdate} />
        </div>
        );
    }
}