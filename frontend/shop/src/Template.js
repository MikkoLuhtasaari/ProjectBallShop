import React from 'react';
import Footballs from './components/Footballs';
import Bowlingballs from './components/Bowlingballs'
import Chocolateballs from './components/Chocolateballs'
import Golfballs from './components/Golfballs'

export default class Template extends React.Component{
    render(){
        return (
            <div>
                <Bowlingballs/>
                <Footballs/>
                <Chocolateballs/>
                <Golfballs/>
            </div>
        );
    }
}