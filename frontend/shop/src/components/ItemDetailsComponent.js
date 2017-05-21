import React from 'react';
import Client from '../Client';
import ReviewsComponent from '../components/ReviewsComponent'
import ShoppingCartComponent from '../components/ShoppingCartComponent'

export default class ItemDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            group: props.params.group,
            id: props.params.id,
            ball: '',
            test: 1
        };

        this.fetchCompleted = this.fetchCompleted.bind(this);
    }

    componentDidMount() {
        this.client.ballById(this.state.group, this.state.id).then(b => this.setState({ball: b})).then(this.fetchCompleted);
    }

    fetchCompleted() {
        this.setState({test: this.state.test + 1});
    }

    componentWillUpdate() {
        // Compare address bar URL to props.location
        if(window.location.href.substring(23) !== this.props.location.pathname) {
          // If they are different, get new ball data with category and id from the current URL
          let path = window.location.href.substring(32);
          let category = path.substring(0, path.indexOf('/'));
          let id = path.substring(path.indexOf('/') + 1);
          // Fetch data and trigger re-render
          this.client.ballById(category, id).then(b => this.setState({ball: b})).then(this.fetchCompleted);
        }

        // Render again if backend hasn't responded yet
        if(this.state.ball === '' && this.state.mounted) {
            this.setState({test: this.state.test + 1});
        }
    }

    render() {
        let imageSrc = "../../images/items/" + this.state.ball.type + "_" + this.state.ball.id + ".png";
        return (
            <section className="whiteBg">
                {
                    <div>
                        <div className="row">
                            <div className="col-xs-1"/>
                            <div className="col-xs-3 item-photo">
                                <img alt="item" id="wideImg" src={imageSrc}/>
                            </div>
                            <div className="col-xs-1"/>
                            {this.getItemInfo()}
                            <div className="col-xs-1"/>
                            {this.getDetailsList()}
                                <div className="col-xs-12" id="wideDiv"/>
                                <div className="col-xs-1"/>
                                <div className="col-xs-4" id="textCenter">
                                    <ReviewsComponent need={"postReview"} group={this.state.ball.category} ballId={this.state.ball.id} location={"tweaked-margin"}/>
                                </div>
                                <div className="col-xs-1"/>
                            <div className="col-xs-6">
                                <h3 className="padding10">Customer reviews:</h3>
                                <br/>
                                <ReviewsComponent need={"wide"} group={this.state.ball.category} ballId={this.state.ball.id} location={"tweaked-margin"}/>
                            </div>
                        </div>
                    </div>
                }
            </section>
        )
    }

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

    getItemInfo(){
        let category = this.state.ball.category;
        if (typeof category !== "undefined") category = category.replace(/ /g, '').toLowerCase();
        let onStock = "This item is out of stock";
        let icon = "glyphicon glyphicon-remove-circle";
        let colorId = "red";
        let buttonId = "btn disabled";
        if (this.state.ball.amount > 0) {
            onStock = "On stock";
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
                    <ReviewsComponent group={this.state.ball.category} ballId={this.state.ball.id}
                                      need={"light"} location={"tweaked-margin"}/>
                </span>
            </div>
        );
    }

    addToCart(buttonId){
        if (this.state.ball.amount > 0) {
            return (
                <div className="section" id="botBad">
                    <button className={buttonId} onClick={ () => ShoppingCartComponent.addToCart(this.state.ball) }>
                        <span id="marginR20" className="glyphicon glyphicon-shopping-cart" aria-hidden="true"/>
                        Add to cart
                    </button>
                </div>
            )
        }
    }
}