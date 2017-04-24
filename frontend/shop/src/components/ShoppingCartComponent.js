import React from 'react';

export default class ShoppingCartComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            total: 0,
            currency: 'EUR'
        };
    }

    render() {
        console.log(this.state.items);
        const items = this.state.items.map(function (item) {
            return (
                ShoppingCartComponent.content(item)
            )
        });
        const body = (<ul>{items}</ul>);
        //const empty = <div>Cart is empty</div>;
        const empty = ShoppingCartComponent.content();
        return ((items.length > 0 ? body : empty))
    }

    addItem(obj, item) {
        this.state.items.push(item);
        this.countTotal();
    }

    removeItem(obj, itemId) {
        let itemIndex;
        this.state.items.some(function (item, index) {
            if (item.id === itemId) {
                itemIndex = index;
                return true;
            }
            return false;
        });

        if (typeof itemId !== 'undefined') {
            this.state.items.splice(itemIndex, 1);
        }
    }

    countTotal() {
        let total = 0;
        this.state.items.forEach(function (item, index) {
            total += item.price;
        });
        this.setState({total: total})
    }

    static content(item) {
        console.log(item);
        return(
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                <span className="glyphicon glyphicon-shopping-cart"/><b>View Cart</b><span className="caret"/>
            </a>
            <ul className="dropdown-menu dropdown-cart" role="menu">
                <li>
                              <span className="item">
                                <span className="item-left">
                                    <img src="images/items/Football_1.png" id="img40" alt="item" />
                                    <span className="item-info">
                                        <span>Joku paska tuote</span>
                                        <span>Vitusti €</span>
                                    </span>
                                </span>
                                <span className="item-right">
                                    <button className="btn btn-xs btn-danger pull-right" id="marginR10">x</button>
                                </span>
                            </span>
                </li>
                <li className="divider"/>
                <li><b><a href="">Siirry maksaan</a><p className="pull-right" href="">Total: 2500€</p></b></li>
            </ul>
        </li>
    )
};}
