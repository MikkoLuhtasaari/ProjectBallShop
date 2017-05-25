import React from 'react';
import Client from '../../Client';
import Reviews from './Reviews'
import {Storage_addToCart} from '../../Storage'

export default class BallHandler extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();

        let administrator = false;
        if (window.location.hash === "#/admin") {
            administrator = true;
        }

        this.state = {
            balls: [],
            updated:false,
            admin: administrator
        };

        this.fetchItems = this.fetchItems.bind(this);
        this.fetchItems();
    }

    componentWillReceiveProps() {
        this.fetchItems();
        this.setState({updated:false});
    }

    componentDidUpdate() {
        if(!this.state.updated) {
            this.fetchItems();
            this.setState({updated:true});
        }
    }

    fetchItems() {
        if (this.props.group !== undefined) this.client.ballsByType(this.props.group).then(b => this.setState({balls: b}));
        else if (this.props.params.type !== undefined) this.client.ballsByName(this.props.params.group, this.props.params.type).then(b => this.setState({balls: b}));
        else this.client.ballsByType(this.props.params.group).then(b => this.setState({balls: b}));
    }

    render(){
        return(
            <div className="marginMx">
                <section id="allBalls">
                    { this.state.balls.map(b => this.createContent(b)) }
                </section>
            </div>
        )
    }

    createContent(ballObject) {
        const propArray = [];
        let imageUrls = [];
        this.client.getImage(ballObject.type + "_" + ballObject.id + ".png")
            .then((response) => imageUrls.push(this.createUrl(response)));
        let category = ballObject.category.replace(/ /g,'').toLowerCase();
        if(!category.includes("game"))category += "sball";
        let link;
        if(this.state.admin) {
            link = "/#/admin/details/" + category + "/" + ballObject.id;
        } else {
          link = "/#/details/" + category + "/" + ballObject.id;
        }

        console.log(imageUrls.length)
        propArray.push(
            <div className="col-md-3 col-sm-6">
                <span className="thumbnail itemThumb">
                    <a href={link}><img src={imageUrls[propArray.length]} alt="Ball"/>URL:{imageUrls[propArray.length]}</a>
                    <div><h1 id="twoLines"><a href={link}>{ballObject.manufacturer} {ballObject.type}</a></h1></div>
                    <Reviews group={category} ballId={ballObject.id} need={"light"} location={"frontPage"}/>
                    <p className="item-p" id="twoLines2">{ballObject.shortDetails}</p>
                    <hr className="item-line"/>
                    <div className="row">
                        <div className="col-md-4 col-sm-6" id="inlineBlock">
                            <p className="item-p item-price">{ballObject.price}€</p>
                        </div>
                        <div className="col-md-4 col-sm-6" id="width100">
                            {this.buyButton(ballObject)}
                        </div>
                    </div>
                </span>
            </div>
            );
    return propArray;
    }

    buyButton(ball) {
        if (ball.amount > 0) {
            return (
                <button className="btn btn-success item-right buttonFont padd" id="btn100"
                        onClick={() => this.itemAdded(ball)}>BUY ITEM
                </button>

            )
        } else{
            return (
                <button className="btn item-right disabled buttonFont padd" id="btn100">Out of stock</button>
            )
        }
    }

    itemAdded(ball){
        Storage_addToCart(ball);
        let handleUpdate = this.props.handleUpdate;
        return handleUpdate(true);
    }

    createUrl(blob) {
        const urlCreator = window.URL || window.webkitURL;
        let imageUrl = urlCreator.createObjectURL(blob);
        imageUrl = imageUrl.replace("blob:", "");
        return imageUrl;
    }
}