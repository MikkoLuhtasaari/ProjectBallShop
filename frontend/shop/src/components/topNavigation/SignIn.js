import React from 'react';
import Client from '../../Client';
import {Storage_getUserId, Storage_setUserId, Storage_getUserName, Storage_setUserName} from '../../Storage'

/**
 * Creates sign in dropdown button displayed at top navigation
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class SignIn extends React.Component {

    /**
     * Constructs the class and creates its state.
     *
     * @param props props to be sent to super
     */
    constructor(props) {
        super(props);
        this.client = new Client();
        let logged = Storage_getUserId() !== null && Storage_getUserId() !== "";
        let name = logged ? Storage_getUserName() : 'Sign in';
        this.state = {
            updated: false,
            name: name,
            logged: logged
        };
    }

    /**
     * Renders class and displays its content to user
     *
     * @returns {XML}
     */
    render() {
        return (
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>{this.state.name}</b> <span
                    className="caret"/></a>
                <ul id="login-dp" className="dropdown-menu">
                    {this.loggedIn(this.state.logged)}
                </ul>
            </li>
        )
    }

    /**
     * Logs user in or out according to current state
     *
     * @param login true if user is to be logged in.
     */
    login(login) {
        if (login) {
            let pass = this.refs.pass.value;
            let userName = this.refs.user.value;
            this.client.userLogin(userName).then(
                (success) => {this.validateUser(success, pass, true)},
                (failure) => {this.validateUser(failure, pass, false)});
        } else{
            Storage_setUserId("");
            Storage_setUserName("");
            this.setState({name: "Sign in"});
            this.setState({logged: false});
            alert("You are now logged out");
                window.location = '/#/';
        }
    }

    /**
     * Returns content to be displayed to user according to login state.
     *
     * @param logged true if user is already logged in.
     * @returns {XML}
     */
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
                            <a href="#/CreateAccount/"><b>Create new account</b></a>
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

    /**
     * Checks that username and password are stored in database and are correctly given.
     *
     * @param user username that is given
     * @param pass password that is given
     * @param success success if username is correct
     */
    validateUser(user, pass, success) {
        if(!success){
            alert("Incorrect username.\nPlease try again.")
        } else if(pass === user.password){
            Storage_setUserId(user.id);
            Storage_setUserName(user.firstName + " " + user.lastName);
            this.setState({name: user.firstName + " " + user.lastName});
            this.setState({logged: true})
            if(user.accessLevel === "Admin"){
                alert("Welcome to admin console!");
                window.location = '/#/admin';
            }
        } else alert("Incorrect password.\nPlease try again.");
    }
}
