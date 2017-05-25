import React from 'react';
import Client from '../../Client';

export default class CreateAccount extends React.Component{
    userExists;
    emailExists;
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            userName: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            city: '',
            address: '',
            zipCode: ''
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
                                <input type="email" className="form-control input-lg" ref="email"
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
                                <input type="text" className="form-control input-lg" ref="userName"
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
                               ref="password" placeholder="Password" required={true} minLength={8}/>
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
                               ref="zipCode" placeholder="Zip Code" required={true}/>
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
                           ref="firstName" placeholder="First Name" required={true} minLength={2}/>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="form-group">
                    <input type="text" className="form-control input-lg"
                           ref="lastName" placeholder="Last Name" required={true} minLength={2}/>
                </div>
            </div>
        </div>
        )
    }

    handleChange() {
        this.client.getUsers().then((u)=> this.getUserNames(u)).then(() => this.checkValues());
    }

    accountCreated() {
        alert("New account created!\nYou can now sign in.");
        window.location = '/#/';
    }

    getUserNames(u) {
        let uExists = false;
        let eExists = false;
        for(let i = 0; i<u.length; i++){
            if(u[i].userName === this.refs.userName.value) uExists = true;
            if(u[i].email === this.refs.email.value) eExists = true;
        }
        this.userExists = uExists;
        this.emailExists = eExists;
    }

    checkValues() {
        let emptyFields = false;

        if (this.userExists) {
            this.refs.userName.setCustomValidity("Username already exists.\nPlease try again.");
        } else if (this.refs.userName.value.includes(" ")){
            this.refs.userName.setCustomValidity("Username can not contain spaces.\nPlease try again.");
        } else if (this.emailExists){
            this.refs.email.setCustomValidity("Email already exists.\nPlease try again.");
        } else if(this.refs.password.value !== this.refs.passW2.value){
            this.refs.userName.setCustomValidity('');
            this.refs.email.setCustomValidity('');
            this.refs.passW2.setCustomValidity("Passwords Don't Match");
        } else {
            this.refs.userName.setCustomValidity('');
            this.refs.passW2.setCustomValidity('');
            this.refs.email.setCustomValidity('');

            for (const ref in this.refs) {
                let value = this.refs[ref].value;
                if(this.refs[ref].checkValidity() === false) emptyFields = true;
                if (value === "") emptyFields = true;
                if(!emptyFields) {
                    if (ref !== "passW2") this.setState({[ref]: value});
                }
            }
            if(!emptyFields) {
                this.client.createAccount(this.state);
                this.accountCreated();
            }

        }
    }
}