import React from 'react';
import Client from '../Client';

export default class ReviewsComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            reviews : [],
            group : ''
        };
        if (typeof this.props.group !== "undefined") {
            this.state.group = this.props.group + "s";
            this.client.reviewsByBallId(this.state.group, this.props.ballId).then(r => this.state.reviews.push(r));
        }
    }

    render(){
        if (this.props.need === "light") return this.returnLight();
        if (this.props.need === "wide") return this.returnWide();
        if (this.props.need === "postReview") return this.reviewItem();
    }

    returnLight() {
        let score = 0;

        for (let i = 0; i < this.state.reviews.length; i++){
            score =+ this.state.reviews[i].score;
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

    returnWide() {
        let temp = [];

        for(let i = 0; i<this.state.reviews.length; i++){
            temp.push(
                <div className="thumbnail">
                    {this.getStars(this.state.reviews[i].score)}
                    {this.state.reviews[i].header}
                    <br/>
                    {this.state.reviews[i].content}
                </div>
            )
        }
        return (
            <div className="ratings">
                {temp}
            </div>
        )
    }

    reviewItem() {
        let rating = 0;
        return (
            <div>
                <h3 className="padding10">Already bought this item?</h3>
                <h5 className="padding10">Please take a minute to give it a rating!</h5>
                <div>
                    <div className="stars">
                        <form>
                            <input className="star star-5" onClick={() => rating = 5} id="star-5" type="radio" name="star"/>
                            <label className="star star-5" htmlFor="star-5"/>
                            <input className="star star-4" onClick={() => rating = 4} id="star-4" type="radio" name="star"/>
                            <label className="star star-4" htmlFor="star-4"/>
                            <input className="star star-3" onClick={() => rating = 3} id="star-3" type="radio" name="star"/>
                            <label className="star star-3" htmlFor="star-3"/>
                            <input className="star star-2" onClick={() => rating = 2} id="star-2" type="radio" name="star"/>
                            <label className="star star-2" htmlFor="star-2"/>
                            <input className="star star-1" onClick={() => rating = 1} id="star-1" type="radio" name="star"/>
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
                <button onClick={() => this.sendReview(rating, this.refs.header.value, this.refs.content.value)}
                        type="button" className="col-xs-7 btn btn-success width100">Send</button>
            </div>
        )
    }

    sendReview(rating, header, content){
        //ToDo Alla olevat console.logit printtaa undefined.
        console.log(this.state.group);
        console.log(this.props.ballId);
        if (rating !== 0) this.client.sendReview(this.state.group, this.props.ballId, 78, rating, header, content);
        else console.log("VITTU VIRHE");
    }
}