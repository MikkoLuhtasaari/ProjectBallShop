import React from 'react';
import Client from '../../Client';
import Reviews from './Reviews'
import {Storage_addToCart} from '../../Storage'
import BallImage from './BallImage'

/**
 * Handles balls that are displayed in different sites
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class BallHandler extends React.Component{

    /**
     * Constructs class and creates client and state.
     *
     * @param props group and type details of items to display
     */
    constructor(props) {
        super(props);
        this.client = new Client();

        let administrator = false;
        if (window.location.hash === "#/admin") {
            administrator = true;
        }

        this.state = {
            balls: [],
            updated:false,
            admin: administrator
        };

        this.fetchItems = this.fetchItems.bind(this);
        this.fetchItems();
    }

    /**
     * Fetches items if needed
     */
    componentWillReceiveProps() {
        this.fetchItems();
        this.setState({updated:false});
    }

    /**
     * Confirms that items have been fetched
     */
    componentDidUpdate() {
        if(!this.state.updated) {
            this.fetchItems();
            this.setState({updated:true});
        }
    }

    /**
     * Fetches items from database
     */
    fetchItems() {
        if (this.props.group !== undefined) this.client.ballsByType(this.props.group).then(b => this.setState({balls: b}));
        else if (this.props.params.type !== undefined) this.client.ballsByName(this.props.params.group, this.props.params.type).then(b => this.setState({balls: b}));
        else this.client.ballsByType(this.props.params.group).then(b => this.setState({balls: b}));
    }

    /**
     * Renders BallHandler and displays content to user
     *
     * @returns {XML}
     */
    render(){
        return(
            <div className="marginMx">
                <section id="allBalls">
                    { this.state.balls.map(b => this.createContent(b)) }
                </section>
            </div>
        )
    }

    /**
     * Creates content to page by adding balls to display.
     *
     * @param ballObject item to be added to page
     * @returns {Array}
     */
    createContent(ballObject) {
        const propArray = [];
        let imageSrc = "../../images/items/no_image.png";

        if(typeof ballObject.id !== "undefined") {
            imageSrc = "../../images/items/" + ballObject.type + "_" + ballObject.id + ".png";
        }

        let category = ballObject.category.replace(/ /g,'').toLowerCase();
        if(!category.includes("game"))category += "sball";
        let link;

        if(this.state.admin) {
            link = "/#/admin/details/" + category + "/" + ballObject.id;
        } else {
          link = "/#/details/" + category + "/" + ballObject.id;
        }

        propArray.push(
            <div className="col-md-3 col-sm-6">
                <span className="thumbnail itemThumb">
                    <a href={link}>
                        <BallImage imageSrc={imageSrc} id="ballImage" />
                    </a>
                    <div><h1 id="twoLines"><a href={link}>{ballObject.manufacturer} {ballObject.type}</a></h1></div>
                    <Reviews group={category} ballId={ballObject.id} need={"light"} location={"frontPage"}/>
                    <p className="item-p" id="twoLines2">{ballObject.shortDetails}</p>
                    <hr className="item-line"/>
                    <div className="row">
                        <div className="col-md-4 col-sm-6" id="inlineBlock">
                            <p className="item-p item-price">{ballObject.price}€</p>
                        </div>
                        <div className="col-md-4 col-sm-6" id="width100">
                            {this.buyButton(ballObject)}
                        </div>
                    </div>
                </span>
            </div>
            );
    return propArray;
    }

    /**
     * Adds buy button
     *
     * If there is no stock, button is disabled.
     * @param ball
     * @returns {XML}
     */
    buyButton(ball) {
        if (ball.amount > 0) {
            return (
                <button className="btn btn-success item-right buttonFont padd" id="btn100"
                        onClick={() => this.itemAdded(ball)}>BUY ITEM
                </button>

            )
        } else{
            return (
                <button className="btn item-right disabled buttonFont padd" id="btn100">Out of stock</button>
            )
        }
    }

    /**
     * Adds ball to shopping cart
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