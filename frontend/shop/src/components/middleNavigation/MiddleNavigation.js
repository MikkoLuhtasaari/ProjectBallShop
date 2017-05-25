import React from 'react';

export default class MiddleNavigation extends React.Component{
    render(){
        return(
            <nav className="navbar-inverse center">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                    <ul className="nav navbar-nav navbar-right">
                        {this.netSports()}
                        {this.batAndRacquet()}
                        {this.goalSports()}
                        {this.targetSports()}
                    </ul>
                </div>
            </nav>
        )
    }

    netSports() {
        return(
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Net Sports <span className="caret"/></a>
                <ul className="dropdown-menu" role="menu">
                    <li><a href="http://localhost:3000/#/type/netsportsball/Volleyball/">Volleyball</a></li>
                    <li><a href="http://localhost:3000/#/type/netsportsball/Handball">Handball</a></li>
                    <li><a href="http://localhost:3000/#/group/netsportsballs">All</a></li>
                </ul>
            </li>
        )
    }

    batAndRacquet() {
        return(
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Bat & Racket Sports <span className="caret"/></a>
                <ul className="dropdown-menu" role="menu">
                    <li><a href="http://localhost:3000/#/type/batandraquetsgame/Baseball">Baseball</a></li>
                    <li><a href="http://localhost:3000/#/type/batandraquetsgame/Tennisball">Tennis</a></li>
                    <li><a href="http://localhost:3000/#/group/batandraquetsgames">All</a></li>
                </ul>
            </li>
        )
    }

    goalSports() {
        return(
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Goal Sports <span className="caret"/></a>
                <ul className="dropdown-menu" role="menu">
                    <li><a href="http://localhost:3000/#/type/goalsportsball/Football">Football</a></li>
                    <li><a href="http://localhost:3000/#/type/goalsportsball/Basketball">Basketball</a></li>
                    <li><a href="http://localhost:3000/#/group/goalsportsballs">All</a></li>
                </ul>
            </li>
        )
    }

    targetSports() {
        return(
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Target Sports <span className="caret"/></a>
                <ul className="dropdown-menu" role="menu">
                    <li><a href="http://localhost:3000/#/type/targetsportsball/Bowlingball">Bowling</a></li>
                    <li><a href="http://localhost:3000/#/type/targetsportsball/Golfball">Golf</a></li>
                    <li><a href="http://localhost:3000/#/group/targetsportsballs">All</a></li>
                </ul>
            </li>
        )
    }
}