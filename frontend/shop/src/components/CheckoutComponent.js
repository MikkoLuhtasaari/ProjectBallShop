import React from 'react';
import ShoppingCartComponent from '../components/ShoppingCartComponent'
import LoginComponent from '../components/LoginComponent'
import Client from "../Client";

export default class CheckoutComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            balls: ShoppingCartComponent.cookies.get('ballArray')
        };
    }

    render(){
        let total = 0;
        let cookieArray = ShoppingCartComponent.cookies.get('ballArray');

        for(let i = 0; i < cookieArray.length; i++) {
            let o = cookieArray[i].content;
            let n = cookieArray[i].count;
            total += (o.price * n);
        }

        let postage = 6.95;
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
                        <td><h5>Estimated shipping</h5></td>
                        <td className="text-right"><h5><strong>{(postage).toFixed(2)}€</strong></h5></td>
                    </tr>
                    <tr>
                        <td colSpan={3}/>
                        <td><h3>Total</h3></td>
                        <td className="text-right"><h3><strong>{(total + postage).toFixed(2)}€</strong></h3></td>
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
            temp.push(
                <tr key={temp.length}>
                    <td className="col-sm-8 col-md-6">
                        <div className="media">
                            <img className="pull-left media-object" id="scaleImg" alt="item" src="../../images/items/Baseball_1.png"/>
                            <div className="media-body">
                                <h4 className="media-heading"><a href={link}>{o.name}</a></h4>
                                <h5 className="media-heading">{o.manufacturer}</h5>
                                <h5 className="media-heading">{o.type}</h5>
                            </div>
                        </div></td>
                    <td className="col-sm-1 col-md-1">
                        <input type="number" className="form-control" ref="inputCounter" min="1" max={o.amount} value={n} onChange={() => this.addOrRemove(o, n, false)}/>
                        <h5/>
                        <h5 className="media-heading">On stock: {o.amount}</h5>
                    </td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>{o.price}€</strong></td>
                    <td className="col-sm-1 col-md-1 text-center"><strong>{(o.price * n).toFixed(2)}€</strong></td>
                    <td className="col-sm-1 col-md-1">
                        <button type="button" className="btn btn-danger" onClick={() => this.addOrRemove(o, n, true)}>
                            <span className="glyphicon glyphicon-remove" id="noMargin"/> Remove
                        </button></td>
                </tr>
            )
        }
        return temp;
    }

    //TODO Jos ostoskorista poistaa tuotteen (remove-napilla) se kadottaa inputCounterin reffin ja palauttaa sen undefinedinä.
    addOrRemove(ball, preCount, removeAll) {
        if(typeof this.refs.inputCounter !== "undefined"){
            if(removeAll || preCount > this.refs.inputCounter.value) ShoppingCartComponent.removeFromCart(ball, removeAll);
            else ShoppingCartComponent.addToCart(ball);
        }else console.log("PERSE!");
        this.setState({balls: ShoppingCartComponent.cookies.get('ballArray')});
    }

    redirectToBank() {
        if (LoginComponent.userId === "") alert("You have to sign in to buy items");
        else {
            this.client.reduceQuantity(ShoppingCartComponent.cookies.get('ballArray'));
            ShoppingCartComponent.cookies.set('ballArray', []);
            alert("User is now redirected to bank services");
            window.location = '/#/';
        }
    }
}