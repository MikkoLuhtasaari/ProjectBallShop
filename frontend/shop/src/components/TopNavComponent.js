import React from 'react';
import LoginComponent from '../components/LoginComponent';
import ShoppingCartComponent from '../components/ShoppingCartComponent';
import SearchComponent from '../components/SearchComponent';

export default class TopNavComponent extends React.Component{
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
                        <SearchComponent />
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                        <LoginComponent/>
                        <ShoppingCartComponent updated={false}/>
                    </ul>
                </div>
            </nav>
        )
    }
}