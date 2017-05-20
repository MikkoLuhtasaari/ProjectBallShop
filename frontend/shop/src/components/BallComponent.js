import React from 'react';
import Client from '../Client';
import ReviewsComponent from '../components/ReviewsComponent'
import ShoppingCartComponent from '../components/ShoppingCartComponent'

export default class BallComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();

        this.state = {
            balls: [],
            updated:false
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

    getShoppingCartBtn(ball) {
        return (
            <div className="options-cart-round">
                <button className="btn btn-default" title="Add to cart" onClick={ () => this.addCookie(ball) }>
                    <span className="fa fa-shopping-cart"/>
                </button>
            </div>
        )
    }

    createContent(ballObject) {
        const propArray = [];
        let imageSrc = "../../images/items/"+ ballObject.type + "_" + ballObject.id + ".png";
        let category = ballObject.category.replace(/ /g,'').toLowerCase();
        if(!category.includes("game"))category += "sball";
        let link = "/#/details/" + category + "/" + ballObject.id;

        propArray.push(
            <div className="col-md-3 col-sm-6">
                <span className="thumbnail itemThumb">
                        <article className="col-item">
                            <div className="photo">
                                {this.getShoppingCartBtn(ballObject)}
                                <img src={imageSrc} alt="Ball"/>
                            </div>
                        </article>
                    <div><h1 id="twoLines"><a href={link}>{ballObject.manufacturer} {ballObject.type}</a></h1></div>

                    <ReviewsComponent group={category} ballId={ballObject.id} need={"light"} location={"frontPage"}/>
                    <p className="item-p" id="twoLines2">{ballObject.shortDetails}</p>
                    <hr className="item-line"/>
                    <div className="row">
                        <div className="col-md-4 col-sm-6" id="inlineBlock">
                            <p className="item-p item-price">{ballObject.price}€</p>
                        </div>
                        <div className="col-md-4 col-sm-6" id="width100">
                            <button className="btn btn-info item-right buttonFont" id="btn100" onClick={() => this.addCookie(ballObject)}>BUY ITEM</button>
                        </div>
                    </div>
                </span>
            </div>
            );
    return propArray;
    }


    addCookie(ball) {
        let temp = [];
        temp = ShoppingCartComponent.cookies.get('ballArray');
        temp.push(ball);
        ShoppingCartComponent.cookies.set('ballArray', temp);
    }
}