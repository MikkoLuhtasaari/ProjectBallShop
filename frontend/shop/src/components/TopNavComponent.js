import React from 'react';
import Client from '../Client';

export default class CartComponent extends React.Component{
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
                    <div className="input-group">
                        <input type="text" className="search-box" placeholder="Search"/>
                            <button type="submit" className="btn"><span className="glyphicon glyphicon-search"/></button>
                    </div>
                </form>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"/></a>
                        <ul id="login-dp" className="dropdown-menu">
                            <li>
                                <div className="row">
                                    <div className="col-md-12">
                                        <form className="form" role="form" method="post" action="login" id="login-nav">
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required/>
                                            </div>
                                            <div className="form-group">
                                                <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="bottom text-center"><a href="http://localhost:3000/#/type/netsportsball/CreateAccount/"><b>Create new account</b></a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            <span className="glyphicon glyphicon-shopping-cart"/><b>7 - Items</b><span className="caret"/>
                        </a>
                        <ul className="dropdown-menu dropdown-cart" role="menu">
                            <li>
                              <span className="item">
                                <span className="item-left">
                                    <img src="images/items/Football_1.png" id="img40" alt="item" />
                                    <span className="item-info">
                                        <span>ITEM NAME</span>
                                        <span>23€</span>
                                    </span>
                                </span>
                                <span className="item-right">
                                    <button className="btn btn-xs btn-danger pull-right" id="marginR10">x</button>
                                </span>
                            </span>
                            </li>
                            <li className="divider"/>
                            <li><a className="text-center" href="">View Cart</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}