import React from 'react';
import SignIn from './SignIn';
import ShoppingCart from './ShoppingCart';
import Search from './Search';

/**
 * Displays top navigation bar to user
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class TopNavigation extends React.Component{
    /**
     * Renders all top navigation and displays it to user.
     *
     * @returns {XML}
     */
    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top top-bar fixed bs-dark">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <a className="navbar-brand" href="#">
                        <img src="images/logo.png" alt="Bally Balls" id="logoImg"/>
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <form className="navbar-form navbar-left form-horizontal" role="search">
                        <Search />
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <SignIn/>
                        <ShoppingCart updated={false}/>
                    </ul>
                </div>
            </nav>
        )
    }
}