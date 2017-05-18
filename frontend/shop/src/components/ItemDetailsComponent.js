import React from 'react';
import Client from '../Client';
import ReviewsComponent from '../components/ReviewsComponent'
import ShoppingCartComponent from '../components/ShoppingCartComponent'

export default class ItemDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {ball: ''};
        this.client.ballById(this.props.params.group, this.props.params.id).then(b => this.setState({ball: b}));
    }

    render() {
        const ball = this.state.ball;
        let category = ball.category;
        if (typeof category !== "undefined") category = category.replace(/ /g, '').toLowerCase();
        let imageSrc = "../../images/items/" + ball.type + "_" + ball.id + ".png";
        let onStock = "This item is out of stock";
        let icon = "glyphicon glyphicon-remove-circle";
        let colorId = "red";
        let buttonId = "btn disabled";
        if (ball.amount > 0) {
            onStock = "On stock";
            icon = "glyphicon glyphicon-ok-circle";
            colorId = "green";
            buttonId = "btn btn-success active";
        }
        return (
            <section>
                {
                    <div>
                        <div className="row">
                            <div className="col-xs-1"/>

                            <div className="col-xs-3 item-photo">
                                <img alt="item" id="wideImg" src={imageSrc}/>
                            </div>
                            <div className="col-xs-1"/>
                            <div className="col-xs-3 text-center">
                                <h3>{ball.manufacturer} {ball.type}</h3>
                                <h5 id="padBot">{ball.shortDetails}</h5>
                                <h3>{ball.price} €</h3>

                                <div className="section" id="botBad">
                                    <button className={buttonId} onClick={ () => this.addCookie(ball) }>
                                        <span id="marginR20" className="glyphicon glyphicon-shopping-cart" aria-hidden="true"/>
                                        Add to cart
                                    </button>
                                </div>

                                <span id={colorId}>
                                    <span className={icon}/>
                                    <span id="shopItem">{onStock}</span>
                                </span>
                                <br/><br/>
                                <span className="text-left">
                                    <ReviewsComponent group={category} ballId={ball.id} need={"light"}
                                                      location={"tweaked-margin"}/>
                                </span>

                            </div>
                            <div className="col-xs-1"/>
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


                            <div className="thumbnail">
                                <div className="col-xs-12" id="wideDiv"/>
                                <div className="col-xs-1"/>
                                <div className="col-xs-4">
                                    <ReviewsComponent need={"postReview"}/>
                                </div>
                                <div className="col-xs-1"/>
                            </div>
                            <div className="col-xs-6">
                                <h3 className="padding10">Customer reviews:</h3>
                                <br/>
                                <ReviewsComponent need={"wide"}/>
                            </div>
                        </div>
                    </div>
                }
            </section>
        )
    }

    addCookie(ball) {
        let temp = [];
        temp = ShoppingCartComponent.cookies.get('ballArray');
        temp.push(ball);
        ShoppingCartComponent.cookies.set('ballArray', temp);
    }
}