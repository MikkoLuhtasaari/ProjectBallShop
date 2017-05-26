import React from 'react';
import BallHandler from './BallHandler'

/**
 * Displays all the balls in database
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class FrontPage extends React.Component{
    /**
     * Renders class and displays content to user
     * @returns {XML}
     */
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