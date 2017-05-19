import React from 'react';
import Client from '../Client';

export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            updated:false
        };
    }

    render(){
        return(
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"/></a>
            <ul id="login-dp" className="dropdown-menu">
            <li>
                <div className="row">
                    <div className="col-md-12">
                        <form className="form" role="form" id="login-nav">
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
                    <div className="bottom text-center"><a href="http://localhost:3000/#/CreateAccount/"><b>Create new account</b></a>
                    </div>
                </div>
            </li>
            </ul>
        </li>
        )
    }
}
