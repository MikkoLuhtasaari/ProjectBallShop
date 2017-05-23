import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import BallComponent from './BallComponent';
import FrontPageComponent from './FrontPageComponent';
import ItemDetailsComponent from './ItemDetailsComponent';
import AdminItemDetailsComponent from './admin/AdminItemDetailsComponent';
import AddItem from './admin/AddItem';
import CheckoutComponent from "./CheckoutComponent";
import CreateAccountComponent from './CreateAccountComponent'
import React from "react";

export default class Content extends React.Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" >
                    <IndexRoute component={ FrontPageComponent }/>
                </Route>
                <Route path="/type/:group/:type">
                    <IndexRoute component={ BallComponent }/>
                </Route>
                <Route path="/group/:group">
                    <IndexRoute component={ BallComponent }/>
                </Route>
                <Route path="/details/:group/:id">
                    <IndexRoute component={ ItemDetailsComponent }/>
                </Route>
                <Route path="/admin/details/:group/:id">
                    <IndexRoute component={ AdminItemDetailsComponent }/>
                </Route>
                <Route path="/admin/add">
                    <IndexRoute component={ AddItem }/>
                </Route>
                <Route path="/CreateAccount">
                    <IndexRoute component={ CreateAccountComponent}/>
                </Route>
                <Route path="/checkout">
                    <IndexRoute component={ CheckoutComponent }/>
                </Route>
            </Router>
        )
    }
}