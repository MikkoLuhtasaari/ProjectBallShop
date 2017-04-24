import React from 'react';
import Client from '../Client';
import LoginComponent from '../components/LoginComponent';
import CartComponent from '../components/ShoppingCartComponent';
import SearchComponent from '../components/SearchComponent';

export default class TopNavComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            updated:false
        };
    }

    render(){
        return(
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <form className="navbar-form navbar-left form-horizontal" role="search">
                    <SearchComponent/>
                </form>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"/></a>
                        <ul id="login-dp" className="dropdown-menu">
                            <LoginComponent/>
                        </ul>
                    </li>
                    <CartComponent/>
                </ul>
            </div>
        )
    }
}