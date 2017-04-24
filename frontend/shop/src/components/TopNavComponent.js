import React from 'react';
import Client from '../Client';
import LoginComponent from '../components/LoginComponent';
import ShoppingCartComponent from '../components/ShoppingCartComponent';
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
                    <SearchComponent />
                </form>
                <ul className="nav navbar-nav navbar-right">
                    <LoginComponent/>
                    <ShoppingCartComponent/>
                </ul>
            </div>
        )
    }
}