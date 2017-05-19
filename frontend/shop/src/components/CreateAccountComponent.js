import React from 'react';
import { browserHistory } from 'react-router';
import Client from '../Client';

export default class CreateAccountComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();

        this.state = {
            fName: '',
            lName: '',
            eMail: '',
            uName: '',
            passW: '',
            address: '',
            zip: '',
            city: ''
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                        <form role="form" onSubmit={this.add}>
                            <h2>Please Sign Up</h2>
                            <hr className="signupLine"/>
                            {this.getPersonalInfo()}
                            <div className="form-group">
                                <input type="email" className="form-control input-lg" ref="eMail"
                                       placeholder="Email Address" required={true}/>
                            </div>
                            <hr className="signupLine"/>
                            <div className="form-group">
                                <input type="text" className="form-control input-lg" ref="address"
                                       placeholder="Home Address" required={true} minLength={5}/>
                            </div>
                            {this.getAddress()}
                            <hr className="signupLine"/>
                            <div className="form-group">
                                <input type="text" className="form-control input-lg" ref="uName"
                                       placeholder="User Name" required={true} minLength={6}/>
                            </div>
                            {this.getPassword()}
                            <hr className="signupLine"/>
                            <div className="row">
                                <input type="submit" value="Register" onClick={() => this.handleChange()}
                                       className="btn btn-primary btn-block btn-lg"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    getPassword(){
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                        <input type="password" className="form-control input-lg"
                               ref="passW" placeholder="Password" required={true} minLength={8}/>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                        <input type="password" className="form-control input-lg"
                               ref="passW2" placeholder="Confirm Password" required={true} minLength={8}/>
                    </div>
                </div>
            </div>
        )
    }

    getAddress(){
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                        <input type="number" className="form-control input-lg"
                               ref="zip" placeholder="Zip Code" required={true}/>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control input-lg"
                               ref="city" placeholder="City" required={true} minLength={2}/>
                    </div>
                </div>
            </div>
        )
    }

    getPersonalInfo(){
        return (
        <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="form-group">
                    <input type="text" className="form-control input-lg"
                           ref="fName" placeholder="First Name" required={true} minLength={2}/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="form-group">
                    <input type="text" className="form-control input-lg"
                           ref="lName" placeholder="Last Name" required={true} minLength={2}/>
                </div>
            </div>
        </div>
        )
    }

    handleChange() {
        if(this.refs.passW.value !== this.refs.passW2.value) {
            this.refs.passW2.setCustomValidity("Passwords Don't Match");
        } else {
            this.refs.passW2.setCustomValidity('');

            let array = [];
            for (const ref in this.refs) {
                array.push({[ref]: this.refs[ref].value});
                this.setState({[ref]: this.refs[ref].value});
            }
            this.client.createAccount(array).then(()=>this.accountCreated());
        }
    }

    accountCreated() {
        alert("New account created!\nYou are now logged in.");
        browserHistory.push('/');
    }
}