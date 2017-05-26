import React from 'react';
import Client from '../../Client';
import {Storage_getUserId} from "../../Storage";

/**
 * Displays reviews on all pages needed.
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class Reviews extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            reviews : [],
            group : '',
            updated: false,
            rating: 0
        };

        this.parseGroup = this.parseGroup.bind(this);
    }

    /**
     * Retrieves balls from database if needed
     */
    componentWillReceiveProps() {
        let g = this.props.group;
        let parsedG = this.parseGroup(g);

        if(parsedG !== undefined){
            this.setState({group : parsedG});
            this.client.reviewsByBallId(parsedG, this.props.ballId).then(r => this.updateReviews(r));
        }
    }

    /**
     * Updates reviews if needed
     *
     * @param r reviews to update
     */

    updateReviews(r){
        this.setState({reviews: r})
    }

    /**
     * Parses group type to correct html form
     *
     * @param group group to be parsed
     * @returns {*}
     */
    parseGroup(group) {
        switch (group) {
          case "Goal sport":
          case "goalsportsball":
              return "goalsportsballs";
          case "Target sport":
          case "targetsportsball":
              return "targetsportsballs";
          case "Bat and raquets game":
          case "batandraquetsgame":
              return "batandraquetsgames";
          case "Net sport":
          case "netsportsball":
              return "netsportsballs";
          default:
              return undefined;
        }
    }

    /**
     * Updates state if needed
     */
    componentDidUpdate() {
        if(!this.state.updated) {
            this.setState({updated: true});
        }
    }

    /**
     * Renders class and returns correct display of reviews
     *
     * @returns {*}
     */
    render(){
        if (this.props.need === "light") return this.returnLight();
        if (this.props.need === "wide") return this.returnWide();
        if (this.props.need === "postReview") return this.reviewItem();
    }

    /**
     * Returns only stars and number of reviews.
     *
     * Used in item details and in front page.
     *
     * @returns {XML}
     */
    returnLight() {
        let score = 0;

        for (let i = 0; i < this.state.reviews.length; i++){
            score += this.state.reviews[i].score;
        }

        score /= this.state.reviews.length;

        if (this.props.location === "frontPage") {
            return (
                <div className="ratings">
                    <span className="pull-right">{this.state.reviews.length} reviews</span>
                    {this.getStars(score)}
                </div>
            )
        } else {
            return (
                <div className="ratings text-center">
                    <span className="tweaked-margin">{this.state.reviews.length} reviews</span>
                    {this.getStars(score)}
                </div>
            )
        }
    }

    /**
     * Returns correctly displayed stars
     *
     * Stars can be empty or filled
     *
     * @param rating rating that defines how many stars to display filled
     * @returns {XML}
     */
    getStars(rating) {
        let starArr = [];
        for (let i = 0; i<5; i++){
            if (rating > i) starArr.push("glyphicon glyphicon-star");
            else starArr.push("glyphicon glyphicon-star-empty");
        }

        return (
            <span>
                <span className={starArr[0]}/>
                <span className={starArr[1]}/>
                <span className={starArr[2]}/>
                <span className={starArr[3]}/>
                <span className={starArr[4]}/>
            </span>
        );
    }

    /**
     * Returns wide information about reviews
     *
     * Contains also written text. Used in item details.
     *
     * @returns {XML}
     */
    returnWide() {
        let temp = [];

        for(let i = 0; i<this.state.reviews.length; i++){
            temp.push(
                <div className="thumbnail" key={"wide"+i}>
                    {this.getStars(this.state.reviews[i].score)}
                    <div className="marginL10">
                    {this.state.reviews[i].header}
                    </div>
                    <br/>
                    <div className="black">
                    {this.state.reviews[i].content}
                    </div>
                </div>
            )
        }
        return (
            <div className="ratings">
                {temp}
            </div>
        )
    }

    /**
     * Returns form that is used in rating items.
     *
     * Used in item details.
     * @returns {XML}
     */
    reviewItem() {
        return (
            <div>
                <h3 className="padding10">Already bought this item?</h3>
                <h5 className="padding10">Please take a minute to give it a rating!</h5>
                <div>
                    <div className="stars">
                        <form>
                            <input className="star star-5" onClick={() => this.setState({rating: 5})} id="star-5" type="radio" name="star"/>
                            <label className="star star-5" htmlFor="star-5"/>
                            <input className="star star-4" onClick={() => this.setState({rating: 4})} id="star-4" type="radio" name="star"/>
                            <label className="star star-4" htmlFor="star-4"/>
                            <input className="star star-3" onClick={() => this.setState({rating: 3})} id="star-3" type="radio" name="star"/>
                            <label className="star star-3" htmlFor="star-3"/>
                            <input className="star star-2" onClick={() => this.setState({rating: 2})} id="star-2" type="radio" name="star"/>
                            <label className="star star-2" htmlFor="star-2"/>
                            <input className="star star-1" onClick={() => this.setState({rating: 1})} id="star-1" type="radio" name="star"/>
                            <label className="star star-1" htmlFor="star-1"/>
                        </form>
                    </div>
                    <form>
                        <div className="form-group col-xs-7 text-center width100">
                            <label htmlFor="comment" className="">Header:</label>
                            <input className="form-control" ref="header" id="header"/>
                        </div>
                        <div className="form-group col-xs-7 text-center width100">
                            <label htmlFor="comment" className="">Comments:</label>
                            <textarea className="form-control" ref="content" rows="5" id="comment"/>
                        </div>
                    </form>
                </div>
                <div className="clearfix"/>
                <button onClick={() => this.sendReview(this.refs.header.value, this.refs.content.value)}
                        type="button" className="col-xs-7 btn btn-success width100">Send</button>
            </div>
        )
    }

    /**
     * Sends review to backend after validation.
     *
     * @param header header of the review
     * @param content content of the review
     */
    sendReview(header, content) {
        let userId = Storage_getUserId();
        if(this.state.rating < 1) alert("Please give star rating for your review.");
        else if(header === "" || content === "") alert("Please make sure you have given\nheader and content for your review.")
        else if (userId === null || userId === "") alert("You have to sign in to post reviews");
        else {
            let formattedGroup = this.state.group.slice(0, this.state.group.length - 1);
            this.client.sendReview(formattedGroup, this.props.ballId, userId, this.state.rating, header, content);
        }
    }
}