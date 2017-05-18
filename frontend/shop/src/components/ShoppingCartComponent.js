import React from 'react';
import Cookies from 'universal-cookie';

export default class ShoppingCartComponent extends React.Component{
    static cookies = new Cookies();

    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
        ShoppingCartComponent.cookies.set('ballArray', []);
    }

    render() {
        const itemsList = ShoppingCartComponent.cookies.get('ballArray');
        const body = this.content(false);
        const empty = this.content(true);
        return ((itemsList.length > 0 ? body : empty))
    }

    removeFromCart(ball) {
        let array = ShoppingCartComponent.cookies.get('ballArray');

        for(let i = 0; i < array.length; i++) {
            if(array[i].type === ball.type && array[i].id === ball.id)
                array.splice(i, 1);
        }

        ShoppingCartComponent.cookies.set('ballArray', array);
    }

    countTotal() {
        let total = 0;
        ShoppingCartComponent.cookies.get('ballArray').forEach(function (item, index) {
            total += item.price;
        });
        return total.toFixed(2);
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
                        <li><b><a href="/#/checkout/">Checkout</a><p className="pull-right" href="">Total: {this.countTotal()}€</p></b></li>
                    </ul>
                </li>
            )
        }
        else return (
            <li className="dropdown">
                {this.viewCart()}
                <ul className="dropdown-menu dropdown-cart" role="menu">
                    <div>Cart is empty</div>
                </ul>
            </li>
        )
    };

    itemDetails() {
        let items = ShoppingCartComponent.cookies.get('ballArray');
        let temp = [];
        ShoppingCartComponent.cookies.get('ballArray').forEach(item => {
            temp.push(
                <span className="item" key={item.type+item.id}>
                    <span className="item-left">
                        <img src="images/items/Football_1.png" id="img40" alt="item" />
                        <span className="item-info">
                            <span>{item.name}</span>
                            <span>{item.price} €</span>
                        </span>
                    </span>
                    <span className="item-right">
                        <button className="btn btn-xs btn-danger pull-right" id="marginR10" onClick={() => this.removeFromCart(item)}>x</button>
                    </span>
                </span>
            )
        });
        return temp;
    }

    viewCart() {
        return (
            <a onClick={() => this.forceUpdate()} href="#" className="dropdown-toggle" data-toggle="dropdown"
               role="button" aria-expanded="false">
                <span className="glyphicon glyphicon-shopping-cart"/><b>View Cart</b><span className="caret"/>
            </a>
        )
    }
}
