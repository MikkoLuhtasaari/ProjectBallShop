import React from 'react';
import Client from '../Client';
import ReviewsComponent from '../components/ReviewsComponent'

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
            <section id="allBalls">
                {
                    this.state.balls.map(b => BallComponent.createContent(b))
                }
            </section>
        )
    }

    static createContent(ballObject) {
        const propArray = [];
        let imageSrc = "../../images/items/"+ ballObject.type + "_" + ballObject.id + ".png";
        let category = ballObject.category.replace(/ /g,'').toLowerCase();
        if(!category.includes("game"))category += "sball";

        propArray.push(
            <div className="col-sm-4 col-lg-4 col-md-4">
                <article className="col-item">
                    <div className="thumbnail">
                        <div className="photo">
                            {BallComponent.getShoppingCartBtn()}
                            <img id="ballImage" src={imageSrc} className="img-responsive" alt="Ball"/>
                            {BallComponent.getBallDetails(ballObject, category)}
                            <ReviewsComponent group={category} ballId={ballObject.id} need={"light"} location={"frontPage"}/>
                        </div></div>
                </article>
            </div>
        );
        return propArray;
    }

    static getBallDetails(ballObject, category) {
        let link = "/#/details/" + category + "/" + ballObject.id;
        return (
            <div className="caption">
                {/*option 2*/}
                <h4 className="pull-right">{ballObject.price}€</h4>
                <h4><a href={link}>{ballObject.manufacturer} {ballObject.type}</a></h4>
                <p>{ballObject.shortDetails}</p>
            </div>
        )
    }

    static getShoppingCartBtn() {
        return (
            <div className="options-cart-round">
                <button className="btn btn-default" title="Add to cart">
                    <span className="fa fa-shopping-cart"/>
                </button>
            </div>
        )
    }
}