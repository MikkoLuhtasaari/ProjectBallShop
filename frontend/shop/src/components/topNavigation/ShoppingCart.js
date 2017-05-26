import React from 'react';
import {Storage_getCart, Storage_removeFromCart} from '../../Storage'

/**
 * Holds and updates information of a shopping cart
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class ShoppingCart extends React.Component{

    /**
     * Constructs class and creates its state
     * @param props
     */
    constructor(props) {
        super(props);
        let updated = false;
        if(this.props.updated !== "undefined") updated = this.props.updated;
        this.state = {
            total: 0,
            cart: [],
            updated: updated
        };
    }

    /**
     * Renders content to be displayed to user
     *
     * @returns {*}
     */
    render() {
        return ((this.content(Storage_getCart().length <= 0)))
    }

    /**
     * Updates state if item is added
     */
    componentWillUpdate() {
        if (!this.state.updated) {
            this.setState({cart: Storage_getCart()});
            this.setState({updated: true});
            this.countTotal();
        }
    }

    /**
     * Returns content of the cart to display to user
     *
     * @param empty true if cart is empty
     * @returns {XML}
     */
    content(empty) {
        if (!empty) {
            return (
                <li className="dropdown">
                    {this.viewCart()}
                    <ul className="dropdown-menu dropdown-cart" role="menu">
                        <li>
                            {this.itemDetails()}
                        </li>
                        <li className="divider"/>
                        <li><b><a href="/#/checkout/">Open cart</a>
                            <p className="pull-right marginR10 whitetxt" href="">Total: {this.state.total}€</p></b>
                        </li>
                    </ul>
                </li>
            )
        }
        else return (
            <li className="dropdown">
                {this.viewCart()}
                <ul className="dropdown-menu dropdown-cart" role="menu">
                    <div className="whitetxt">Cart is empty</div>
                </ul>
            </li>
        )
    };

    /**
     * Counts the total price of items at cart
     */
    countTotal(){
        let total = 0;
        let array = Storage_getCart();

        for(let i = 0; i < array.length; i++) {
            let o = array[i].content;
            let n = array[i].count;
            total += (o.price * n);
        }
        this.setState({total: total.toFixed(2)});
    }

    /**
     * Returns list of items to be displayed in shopping cart if not empty
     *
     * @returns {Array}
     */
    itemDetails() {
        let temp = [];
        let array = Storage_getCart();
        for (let i = 0; i < array.length; i++) {
            let o = array[i].content;
            let n = array[i].count;

            let imageSrc;
            const http = new XMLHttpRequest();
            http.open('HEAD', "../../images/items/"+ o.type + "_" + o.id + ".png", false);
            http.send();
            if(http.status !== 404) imageSrc = "../../images/items/"+ o.type + "_" + o.id + ".png";
            else imageSrc = "../../images/items/no_image.png";

            temp.push(
                <span className="item" key={temp.length}>
                    <span className="item-left">
                        <img src={imageSrc} id="img40" alt="item"/>
                        <span className="item-info">
                            <span>{n}x {o.name}</span>
                            <span>{o.price} €</span>
                        </span>
                    </span>
                    <span className="item-right">
                        <button className="btn btn-xs btn-danger pull-right marginR10"
                                onClick={() => this.removeItem(o)}>X</button>
                    </span>
                </span>
            )
        }
        return temp;
    }

    /**
     * Removes a specific item from cart if clicked
     *
     * @param o item to be removed
     */
    removeItem(o){
        Storage_removeFromCart(o, true);
        this.setState({updated: !this.state.updated})
    }

    /**
     * Displays cart item and the number of items on it.
     *
     * @returns {XML}
     */
    viewCart() {
        let array = Storage_getCart();
        let itemCount = 0;
        for(let i = 0; i < array.length; i++) {
            itemCount += array[i].count;
        }

        if (itemCount === 0) itemCount = "Shopping cart";
        else itemCount += " items";

        return (
            <a onClick={() => this.setState({updated: false})} href="#" className="dropdown-toggle" data-toggle="dropdown"
               role="button" aria-expanded="false">
                <span className="glyphicon glyphicon-shopping-cart"/><b>{itemCount}</b><span className="caret"/>
            </a>
        )
    }
}
