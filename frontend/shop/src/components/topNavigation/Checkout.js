import React from 'react';
import Client from "../../Client";
import {Storage_addToCart, Storage_removeFromCart, Storage_getCart, Storage_setCart, Storage_getUserId} from "../../Storage"


export default class Checkout extends React.Component{
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
            updated: false
        };
    }

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
                            <button type="button" className="btn btn-default"><a href="http://localhost:3000/#/">
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

    getProducts() {
        let temp = [];

        for(let i = 0; i < this.state.balls.length; i++) {
            let o = this.state.balls[i].content;
            let n = this.state.balls[i].count;
            let category = o.category.replace(/ /g,'').toLowerCase();
            if(!category.includes("game"))category += "sball";
            let link = "/#/details/" + category + "/" + o.id;
            let imageSrc = "../../images/items/"+ o.type + "_" + o.id + ".png";
            temp.push(
                <tr key={temp.length}>
                    <td className="col-sm-8 col-md-6">
                        <div className="media">
                            <img className="pull-left media-object" id="scaleImg" alt="item" src={imageSrc}/>
                            <div className="media-body">
                                <h4 className="media-heading"><a href={link}>{o.name}</a></h4>
                                <h5 className="media-heading">{o.manufacturer}</h5>
                                <h5 className="media-heading">{o.type}</h5>
                            </div>
                        </div></td>
                    <td className="col-sm-1 col-md-1">
                        <input type="number" className="form-control" min="1" max={o.amount} value={this.state.inputs[i]} onChange={(e)=> this.setValue(e.target.value, i, o, n)} />
                        <h5/>
                        <h5 className="media-heading">On stock: {o.amount}</h5>
                    </td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>{o.price}€</strong></td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>{(o.price * n).toFixed(2)}€</strong></td>
                    <td className="col-sm-1 col-md-1">
                        <button type="button" className="btn btn-danger" onClick={() => this.addOrRemove(o, n, i, true)}>
                            <span className="glyphicon glyphicon-remove" id="noMargin"/> Remove
                        </button></td>
                </tr>
            )
        }
        return temp;
    }

    addOrRemove(ball, preCount, value, removeAll) {
        if(removeAll || preCount > value) Storage_removeFromCart(ball, removeAll);
        else Storage_addToCart(ball);
        this.setState({balls: Storage_getCart()});
    }

    redirectToBank() {
        if (Storage_getUserId() === "" || Storage_getUserId() === null) alert("You have to sign in to buy items");
        else {
            this.client.reduceQuantity(Storage_getCart());
            Storage_setCart([]);
            this.setState({balls: Storage_getCart()})
            alert("User is now redirected to bank services");
            window.location = '/#/';
        }
    }

    setValue(value, pos, o, n) {
        let arr = this.state.inputs;
        arr[pos] = value;
        this.addOrRemove(o, n, value, false);
        this.setState({inputs: arr});
    }
}