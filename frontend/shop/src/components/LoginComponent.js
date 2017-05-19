import React from 'react';
import Client from '../Client';

export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            updated:false,
            name: "Login"
        };
    }

    render(){
        if (this.state.name === "Login"){
            return(
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>{this.state.name}</b> <span className="caret"/></a>
                <ul id="login-dp" className="dropdown-menu">
                <li>
                    <div className="row">
                        <div className="col-md-12">
                            <form className="form" role="form" id="login-nav">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                                    <input type="email" className="form-control" ref="mail" placeholder="Email address" required/>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                                    <input type="password" ref="pass" className="form-control" id="exampleInputPassword2" placeholder="Password" required/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" data-toggle="dropdown" onClick={() => this.login(true)} className="btn btn-primary btn-block">Sign in</button>
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
        }else{
            return(
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>{this.state.name}</b> <span className="caret"/></a>
                    <ul id="login-dp" className="dropdown-menu">
                        <li>
                            <div className="row">
                                <div className="bottom text-center"><a href="#" data-toggle="dropdown" onClick={()=>this.login(false)}><b>Log out</b></a></div>
                            </div>
                        </li>
                    </ul>
                </li>
            )
        }
    }

    login(login) {
        if(login)this.client.login(this.refs.mail.value, this.refs.pass.value).then(this.setState({name: "Pekka Perärööri"}));
        else this.setState({name: "Login"});
    }
}
