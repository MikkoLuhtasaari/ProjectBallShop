import React from 'react';
import {Storage_getCart, Storage_removeFromCart} from '../../Storage'

export default class ShoppingCart extends React.Component{
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

    render() {
        return ((this.content(Storage_getCart().length <= 0)))
    }

    componentWillUpdate() {
        if (!this.state.updated) {
            this.setState({cart: Storage_getCart()});
            this.setState({updated: true});
            this.countTotal();
        }
    }

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

    itemDetails() {
        let temp = [];
        let array = Storage_getCart();
        for (let i = 0; i < array.length; i++) {
            let o = array[i].content;
            let n = array[i].count;
            let imageSrc = "../../images/items/"+ o.type + "_" + o.id + ".png";
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

    removeItem(o){
        Storage_removeFromCart(o, true);
        this.setState({updated: !this.state.updated})
    }

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
