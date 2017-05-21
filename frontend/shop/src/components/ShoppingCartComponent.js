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
        return ((this.content(itemsList.length <= 0)))
    }

    static addToCart(ball) {
        let cookieArray = ShoppingCartComponent.cookies.get('ballArray');
        let item = {count: 1, content: ball};
        let added = false;

        for(let i = 0; i < cookieArray.length; i++) {
            let o = cookieArray[i].content;
            if(o.type === ball.type && o.id === ball.id){
                cookieArray[i].count += 1;
                added = true;
            }
        }

        if (added === false){
            cookieArray.push(item);
        }
        ShoppingCartComponent.cookies.set('ballArray', cookieArray);
    }

    static removeFromCart(ball, removeAll) {
        let cookieArray = ShoppingCartComponent.cookies.get('ballArray');
        let removed = false;

        for(let i = 0; i < cookieArray.length && !removed; i++) {
            let o = cookieArray[i].content;

            if(o.type === ball.type && o.id === ball.id) {
                cookieArray[i].count -= 1;
                if(cookieArray[i].count <= 0 || removeAll) cookieArray.splice(i, 1);
                removed = true;
            }
        }
        ShoppingCartComponent.cookies.set('ballArray', cookieArray);
    }

    countTotal() {
        let total = 0;
        let cookieArray = ShoppingCartComponent.cookies.get('ballArray');

        for(let i = 0; i < cookieArray.length; i++) {
            let o = cookieArray[i].content;
            let n = cookieArray[i].count;
            total += (o.price * n);
        }

        this.setState({total: total.toFixed(2)});
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
                        <li><b><a href="/#/checkout/">Checkout</a><p className="pull-right marginR10 whitetxt" href="">Total: {this.state.total}€</p></b></li>
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

    itemDetails() {
        let temp = [];
        let cookieArray = ShoppingCartComponent.cookies.get('ballArray');

        for (let i = 0; i < cookieArray.length; i++) {
            let o = cookieArray[i].content;
            let n = cookieArray[i].count;
            temp.push(
                <span className="item" key={temp.length}>
                    <span className="item-left">
                        <img src="images/items/Football_1.png" id="img40" alt="item"/>
                        <span className="item-info">
                            <span>{n}x {o.name}</span>
                            <span>{o.price} €</span>
                        </span>
                    </span>
                    <span className="item-right">
                        <button className="btn btn-xs btn-danger pull-right marginR10"
                                onClick={() => ShoppingCartComponent.removeFromCart(o, false)}>x</button>
                    </span>
                </span>
            )
        }

        return temp;
    }

    viewCart() {
        let cookieArray = ShoppingCartComponent.cookies.get('ballArray');
        let itemCount = 0;
        for(let i = 0; i < cookieArray.length; i++) {
            itemCount += cookieArray[i].count;
        }

        if (itemCount === 0) itemCount = "Shopping cart";
        else itemCount += " items";

        return (
            <a onClick={() => this.countTotal()} href="#" className="dropdown-toggle" data-toggle="dropdown"
               role="button" aria-expanded="false">
                <span className="glyphicon glyphicon-shopping-cart"/><b>{itemCount}</b><span className="caret"/>
            </a>
        )
    }
}
