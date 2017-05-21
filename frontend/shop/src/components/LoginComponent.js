import React from 'react';
import Client from '../Client';

export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            updated: false,
            name: "Login"
        };
    }

    render() {
        return (
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>{this.state.name}</b> <span
                    className="caret"/></a>
                <ul id="login-dp" className="dropdown-menu">
                    {this.loggedIn(this.state.name !== "Login")}
                </ul>
            </li>
        )
    }

    login(login) {
        if (login) {
            let pass = this.refs.pass.value;
            let userName = this.refs.user.value;
            this.client.userLogin(userName).then(
                (success) => {this.validateUser(success, pass, true)},
                (failure) => {this.validateUser(failure, pass, false)});
        } else this.setState({name: "Login"});
    }

    loggedIn(logged) {
        if (!logged) {
            return (
                <li>
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form" role="form" id="login-nav">
                                <div className="form-group">
                                    <label className="sr-only">User name</label>
                                    <input type="text" className="form-control" ref="user" placeholder="User Name" required/>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                                    <input type="password" ref="pass" className="form-control"
                                           id="exampleInputPassword2" placeholder="Password" required/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" data-toggle="dropdown" onClick={() => this.login(true)}
                                            className="btn btn-primary btn-block">Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="bottom text-center">
                            <a href="http://localhost:3000/#/CreateAccount/"><b>Create new account</b></a>
                        </div>
                    </div>
                </li>
            )
        } else {
            return (
                <li>
                    <div className="row">
                        <div className="bottom text-center">
                            <a href="#" data-toggle="dropdown" onClick={() => this.login(false)}><b>Log out</b></a>
                        </div>
                    </div>
                </li>
            )
        }
    }

    validateUser(user, pass, success) {
        if(!success){
            alert("Incorrect username.\nPlease try again.")
        } else if(pass === user.password){
            this.setState({name: user.firstName + " " + user.lastName});
        } else alert("Incorrect password.\nPlease try again.");
    }
}
