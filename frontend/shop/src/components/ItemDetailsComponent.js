import React from 'react';
import Client from '../Client';

export default class ItemDetailsComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {ball : ''};
        this.client.ballById(this.props.params.group, this.props.params.id).then(b => this.setState({ball: b }));
    }

    render(){
        const ball = this.state.ball;
        let imageSrc = "../../images/items/"+ ball.type + "_" + ball.id + ".png";
        let onStock = "This item is out of stock";
        let ikon = "glyphicon glyphicon-remove-circle";
        let colorId = "red";
        let buttonId = "btn disabled";
        if(ball.amount > 0){
            onStock = "On stock";
            ikon = "glyphicon glyphicon-ok-circle";
            colorId = "green";
            buttonId = "btn btn-success active";
        }
        return(
            <section>
                {
                    <div className="container">
                        <div className="row" id="centerAll">
                            <div className="col-xs-4 item-photo">
                                <img alt="item" id="wideImg" src={imageSrc} />
                            </div>
                            <div className="col-xs-5">
                                <h3>{ball.manufacturer} {ball.type}</h3>
                                <h5 id="padBot">{ball.shortDetails}</h5>
                                <h3>{ball.price} €</h3>
                                <div className="section" id="botBad">
                                    <button className={buttonId}><span id="marginR20" className="glyphicon glyphicon-shopping-cart" aria-hidden="true"/> Add to cart</button>
                                </div>
                                <span id={colorId}>
                                    <span className={ikon}/>
                                    <span id="shopItem">{onStock}</span>
                                </span>
                            </div>
                            <div className="col-xs-9" id="wideDiv">
                                <div>
                                    <p id="pad15" className="text-center">
                                        <small>
                                            {ball.details}
                                        </small>
                                    </p>
                                    <ul>
                                        <li>Name: {ball.name}</li>
                                        <li>Color: {ball.color}</li>
                                        <li>Diameter: {ball.diameter}</li>
                                        <li>Weight: {ball.weigth}</li>
                                        <li>Name: {ball.name}</li>
                                        <li>Manufacturer: {ball.manufacturer}</li>
                                        <li>Category: {ball.category}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </section>
        )
    }
}