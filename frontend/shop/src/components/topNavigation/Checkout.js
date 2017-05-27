import React from 'react';
import Client from "../../Client";
import BallImage from '../pageContent/BallImage'
import {Storage_addToCart, Storage_removeFromCart, Storage_getCart, Storage_setCart, Storage_getUserId} from "../../Storage"

/**
 * Displays shopping cart at check out page.
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class Checkout extends React.Component{

    /**
     * Constructs page and creates its state.
     *
     * @param props sends props forward if received
     */
    constructor(props) {
        super(props);
        this.client = new Client();

        let values = [];
        let array = Storage_getCart();

        for(let i = 0; i < array.length; i++)
            values.push(array[i].count);

        this.state = {
            balls: array,
            inputs: values,
            imageSrc:[],
            updated: false
        };
    }

    componentWillMount(){
        let imgArr = [];
        for(let i = 0; i<this.state.balls.length; i++){
            if(this.state.balls[i].content.id !== "undefined"){
                imgArr.push("../../images/items/" + this.state.balls[i].content.type + "_" + this.state.balls[i].content.id + ".png")
            }
        }
        this.setState({imageSrc:imgArr})
    }

    /**
     * Renders checkout page and displays it to user.
     *
     * @returns {XML}
     */
    render(){
        let total = 0;
        let array = Storage_getCart();
        let productCount = 0;

        for(let i = 0; i < array.length; i++) {
            let o = array[i].content;
            let n = array[i].count;
            total += (o.price * n);
            productCount += n;
        }

        //Postage per item
        let postage = 0.95;
        return(
            <div className="marginMx whiteBg">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price (á)</th>
                        <th colSpan={2}>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getProducts()}
                    <tr >
                        <td colSpan={3}/>
                        <td><h5>Subtotal</h5></td>
                        <td className="text-right"><h5><strong>{(total).toFixed(2)}€</strong></h5></td>
                    </tr>
                    <tr>
                        <td colSpan={3}>   </td>
                        <td><h5>Shipping</h5></td>
                        <td className="text-right"><h5><strong>{(postage*productCount).toFixed(2)}€</strong></h5></td>
                    </tr>
                    <tr>
                        <td colSpan={3}/>
                        <td><h3>Total</h3></td>
                        <td className="text-right"><h3><strong>{(total + (postage*productCount)).toFixed(2)}€</strong></h3></td>
                    </tr>
                    <tr>
                        <td colSpan={3}/>
                        <td>
                            <button type="button" className="btn btn-default"><a href="#/">
                                <span className="glyphicon glyphicon-shopping-cart"/> Continue Shopping</a>
                            </button></td>
                        <td>
                            <button type="button" className="btn btn-success" onClick={() => this.redirectToBank()}>Checkout
                                <span className="glyphicon glyphicon-play"/>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    /**
     * Displays all the items added to cart
     *
     * @returns {Array}
     */
    getProducts() {
        let temp = [];
        for (let i = 0; i < this.state.balls.length; i++) {
            let o = this.state.balls[i].content;
            let n = this.state.balls[i].count;
            let category = o.category.replace(/ /g, '').toLowerCase();
            if (!category.includes("game")) category += "sball";
            let link = "/#/details/" + category + "/" + o.id;

            if (this.state.imageSrc !== '') {
                temp.push(
                    <tr key={temp.length}>
                        <td className="col-sm-8 col-md-6">
                            <div className="media">
                                <BallImage className="pull-left media-object" imageSrc={this.state.imageSrc[i]} alt="item" id="scaleImg"/>
                                <div className="media-body">
                                    <h4 className="media-heading"><a href={link}>{o.name}</a></h4>
                                    <h5 className="media-heading">{o.manufacturer}</h5>
                                    <h5 className="media-heading">{o.type}</h5>
                                </div>
                            </div>
                        </td>
                        <td className="col-sm-1 col-md-1">
                            <input type="number" className="form-control" min="1" max={o.amount}
                                   value={this.state.inputs[i]}
                                   onChange={(e) => this.setValue(e.target.value, i, o, n)}/>
                            <h5/>
                            <h5 className="media-heading">On stock: {o.amount}</h5>
                        </td>
                        <td className="col-sm-1 col-md-1 text-center"><strong>{o.price}€</strong></td>
                        <td className="col-sm-1 col-md-1 text-center"><strong>{(o.price * n).toFixed(2)}€</strong></td>
                        <td className="col-sm-1 col-md-1">
                            <button type="button" className="btn btn-danger"
                                    onClick={() => this.addOrRemove(o, n, i, true)}>
                                <span className="glyphicon glyphicon-remove" id="noMargin"/> Remove
                            </button>
                        </td>
                    </tr>
                )
            } else {
                return (
                    <div><p>Loading...</p></div>
                )
            }
        }
        return temp;
    }

    /**
     * Adds or removes specific ball
     *
     * @param ball ball to be added or reduced
     * @param preCount item count prior adding or reducing
     * @param value value after adding or reducing
     * @param removeAll true if all specific items are to be removed
     */
    addOrRemove(ball, preCount, value, removeAll) {
        if(removeAll || preCount > value) Storage_removeFromCart(ball, removeAll);
        else Storage_addToCart(ball);
        this.setState({balls: Storage_getCart()});
    }

    /**
     * Redirect user to bank if signed in and checkout is pressed
     */
    redirectToBank() {
        if (Storage_getUserId() === "" || Storage_getUserId() === null) alert("You have to sign in to buy items");
        else {
            let obj = {};
            let inputs = this.state.inputs;
            let cart = Storage_getCart();
            let category;
            let id;

            for (let i = 0; i < cart.length; i++) {
                let content = cart[i].content;
                let newValue = inputs[i];
                for(let item in content) {
                    if (item === "amount") content[item] -= newValue;
                    if (item === "id") id = content[item];
                    if (item !== "category" && item !== "id" && item !== "reviews") obj[item] = content[item];
                    else if(item === "category") category = content[item];
                }
            }
            category = category.replace(/ /g,'').toLowerCase();
            if(!category.includes("game"))category += "sball";

            this.client.reduceQuantity(obj, id, category);
            Storage_setCart([]);
            this.setState({balls: Storage_getCart()})
            alert("User is now redirected to bank services");
            window.location = '/#/';
        }
    }

    /**
     * Updates the value in input field according to adding or reducing.
     *
     * @param after value after adding or reducing
     * @param pos position that is updated
     * @param object object that is updated
     * @param prior number of a object prior to update
     */
    setValue(after, pos, object, prior) {
        let arr = this.state.inputs;
        arr[pos] = after;
        this.addOrRemove(object, prior, after, false);
        this.setState({inputs: arr});
    }
}