import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import BallHandler from './BallHandler';
import FrontPage from './FrontPage';
import ItemDetails from './ItemDetails';
import AdminItemDetailsComponent from '../admin/AdminItemDetailsComponent';
import AddItem from '../admin/AddItem';
import Checkout from "../topNavigation/Checkout";
import CreateAccount from '../topNavigation/CreateAccount'
import AdminFrontPage from '../admin/AdminFrontPage'
import React from "react";

export default class Routes extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={props => <FrontPage {...props} handleUpdate={this.props.handleUpdate} />}/>
                <Route path="/type/:group/:type" component={props => <BallHandler {...props} handleUpdate={this.props.handleUpdate} />}/>
                <Route path="/group/:group" component={props => <BallHandler {...props} handleUpdate={this.props.handleUpdate} />}/>
                <Route path="/details/:group/:id" component={props => <ItemDetails {...props} handleUpdate={this.props.handleUpdate} />}/>
                <Route path="/admin" component={props => <AdminFrontPage {...props} handleUpdate={this.props.handleUpdate} />}/>
                <Route path="/admin/details/:group/:id" component={props => <AdminItemDetailsComponent {...props} handleUpdate={this.props.handleUpdate} />}/>
                <Route path="/admin/add">
                    <IndexRoute component={ AddItem }/>
                </Route>

                <Route path="/CreateAccount">
                    <IndexRoute component={ CreateAccount}/>
                </Route>
                <Route path="/checkout">
                    <IndexRoute component={ Checkout }/>
                </Route>
            </Router>
        )
    }
}