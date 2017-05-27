import React from 'react';
import Client from '../../Client';
import Reviews from './Reviews'
import {Storage_addToCart} from "../../Storage"
import BallImage from './BallImage'

/**
 * Displays detail view of specific ball
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class ItemDetails extends React.Component {

    /**
     * Constructs class and creates client and state.
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            group: props.params.group,
            id: props.params.id,
            ball: '',
            imageSrc:'',
            test: 1
        };

        this.fetchCompleted = this.fetchCompleted.bind(this);
    }

    /**
     * Fetches ball of a specific id from database
     */
    componentDidMount() {
        this.client.ballById(this.state.group, this.state.id).then(b => this.setState({ball: b})).then(this.fetchCompleted);
    }

    /**
     * Reloads page when fetch is completed
     */
    fetchCompleted() {
        this.setState({test: this.state.test + 1});
    }

    /**
     * Updates page if search is applied in item details page
     */
    componentWillUpdate() {
        if(window.location.href.substring(23) !== this.props.location.pathname) {
          let path = window.location.href.substring(32);
          let category = path.substring(0, path.indexOf('/'));
          let id = path.substring(path.indexOf('/') + 1);
          this.client.ballById(category, id).then(b => this.setState({ball: b})).then(this.fetchCompleted);
        }
        if(this.state.ball === '' && this.state.mounted) {
            this.setState({test: this.state.test + 1});
        }

        if(this.state.imageSrc === '' && typeof this.state.ball.id !== 'undefined') {
            this.setState({imageSrc: "../../images/items/" + this.state.ball.type + "_" + this.state.ball.id + ".png"})
        }
    }

    /**
     * Renders class and displays its content to user.
     *
     * @returns {XML}
     */
    render() {
        if(this.state.imageSrc !== '') {
        return (
            <section className="whiteBg">
                {
                    <div>
                        <div className="row">
                            <div className="col-xs-1"/>
                            <div className="col-xs-3 item-photo">
                                <BallImage imageSrc={this.state.imageSrc} id="wideImg"/>
                            </div>
                            <div className="col-xs-1"/>
                            {this.getItemInfo()}
                            <div className="col-xs-1"/>
                            {this.getDetailsList()}
                                <div className="col-xs-12" id="wideDiv"/>
                                <div className="col-xs-1"/>
                                <div className="col-xs-4" id="textCenter">
                                    <Reviews need={"postReview"} group={this.state.ball.category}
                                             ballId={this.state.ball.id} location={"tweaked-margin"}/>
                                </div>
                                <div className="col-xs-1"/>
                            <div className="col-xs-6">
                                <h3 className="padding10">Customer reviews:</h3>
                                <br/>
                                <Reviews need={"wide"} group={this.state.ball.category}
                                         ballId={this.state.ball.id} location={"tweaked-margin"}/>
                            </div>
                        </div>
                    </div>
                }
            </section>
        )

        } else {
            return (
                <p>Loading...</p>
            )
        }
    }

    /**
     * Returns list of all the details that a ball has
     *
     * @returns {XML}
     */
    getDetailsList(){
        let ball = this.state.ball;
        return (
            <div className="col-xs-3">
                <ul>
                    <li id="minH50">{ball.details}</li>
                    <br/>
                    <li>Name: {ball.name}</li>
                    <li>Color: {ball.color}</li>
                    <li>Diameter: {ball.diameter}</li>
                    <li>Weight: {ball.weigth}</li>
                    <li>Name: {ball.name}</li>
                    <li>Manufacturer: {ball.manufacturer}</li>
                    <li>Category: {ball.category}</li>
                </ul>
            </div>
        );
    }

    /**
     * Displays main information about a ball, including image, stock and buy button
     *
     * @returns {XML}
     */
    getItemInfo(){
        let onStock = "This item is out of stock";
        let icon = "glyphicon glyphicon-remove-circle";
        let colorId = "red";
        let buttonId = "btn disabled";
        if (this.state.ball.amount > 0) {
            onStock = this.state.ball.amount + " on stock";
            icon = "glyphicon glyphicon-ok-circle";
            colorId = "green";
            buttonId = "btn btn-success active";
        }
        return (
            <div className="col-xs-3 text-center">
                <h1>{this.state.ball.manufacturer} {this.state.ball.type}</h1>
                <h3 id="padBot">{this.state.ball.shortDetails}</h3>
                <h1>{this.state.ball.price} €</h1>
                {this.addToCart(buttonId)}
                <span id={colorId}>
                    <span className={icon}/>
                    <span id="shopItem">{onStock}</span>
                </span>
                <br/><br/>
                <span className="text-left">
                    <Reviews group={this.state.ball.category} ballId={this.state.ball.id}
                             need={"light"} location={"tweaked-margin"}/>
                </span>
            </div>
        );
    }

    /**
     * Displays add to cart button according to stock
     *
     * @param buttonId determines if item is on stock or not
     * @returns {XML}
     */
    addToCart(buttonId){
        if (this.state.ball.amount > 0) {
            return (
                <div className="section" id="botBad">
                    <button className={buttonId} onClick={ () => {this.itemAdded(this.state.ball)} }>
                        <span id="marginR20" className="glyphicon glyphicon-shopping-cart" aria-hidden="true"/>
                        Add to cart
                    </button>
                </div>
            )
        }
    }

    /**
     * Adds ball to shopping cart and updates it
     *
     * @param ball ball to be added to cart
     * @returns {*}
     */
    itemAdded(ball){
        Storage_addToCart(ball);
        let handleUpdate = this.props.handleUpdate;
        return handleUpdate(true);
    }
}