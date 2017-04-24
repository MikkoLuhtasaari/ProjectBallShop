import React from 'react';
import Client from '../Client';

export default class ShoppingCartComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            updated:false
        };
    }

    render(){
        return(
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    <span className="glyphicon glyphicon-shopping-cart"/><b>7 - Items</b><span className="caret"/>
                </a>
                <ul className="dropdown-menu dropdown-cart" role="menu">
                    <li>
                              <span className="item">
                                <span className="item-left">
                                    <img src="images/items/Football_1.png" id="img40" alt="item" />
                                    <span className="item-info">
                                        <span>ITEM NAME</span>
                                        <span>23€</span>
                                    </span>
                                </span>
                                <span className="item-right">
                                    <button className="btn btn-xs btn-danger pull-right" id="marginR10">x</button>
                                </span>
                            </span>
                    </li>
                    <li className="divider"/>
                    <li><a className="text-center" href="">View Cart</a></li>
                </ul>
            </li>
        )
    }
}
