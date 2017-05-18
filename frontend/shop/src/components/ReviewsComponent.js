import React from 'react';
import Client from '../Client';

export default class ReviewsComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {review : ''};
        this.client.reviewByBallId(this.props.group, this.props.ballId).then(r => this.setState({review: r }));
    }

    render(){
        const review = this.state.review;
        let score = 1;
        let content = "tää oli ihan paska pallo, en aio pelata tällä enää koskaan!";
        let reviewCount = 154;
        let location = this.props.location;
        if (this.props.need === "light") return ReviewsComponent.returnLight(score, reviewCount, location);
        if (this.props.need === "wide") return ReviewsComponent.returnWide(content);
        if (this.props.need === "postReview") return ReviewsComponent.reviewItem();
    }

    static reviewItem() {
        return (
            <div>
                <h3 className="padding10">Already bought this item?</h3>
                <h5 className="padding10">Please take a minute to give it a rating!</h5>
                <div>
                <div className="stars">
                    <form action="">
                        <input className="star star-5" id="star-5" type="radio" name="star"/>
                        <label className="star star-5" htmlFor="star-5"/>
                        <input className="star star-4" id="star-4" type="radio" name="star"/>
                        <label className="star star-4" htmlFor="star-4"/>
                        <input className="star star-3" id="star-3" type="radio" name="star"/>
                        <label className="star star-3" htmlFor="star-3"/>
                        <input className="star star-2" id="star-2" type="radio" name="star"/>
                        <label className="star star-2" htmlFor="star-2"/>
                        <input className="star star-1" id="star-1" type="radio" name="star"/>
                        <label className="star star-1" htmlFor="star-1"/>
                    </form>
                </div>
                    <form>
                        <div className="form-group col-xs-7 text-center">
                            <label htmlFor="comment" className="">Comments:</label>
                            <textarea className="form-control" rows="5" id="comment"/>
                        </div>
                    </form>
            </div>
                <div className="clearfix"/>
                <button type="button" className="col-xs-7 btn btn-success">Send</button>
            </div>
        )
    }

    static returnLight(score, reviewCount, location) {
        if (location === "frontPage") {
            return (
                <div className="ratings">
                    <span className="pull-right">{reviewCount} reviews</span>
                    {ReviewsComponent.getStarts(score)}
                </div>
            )
        } else {
            return (
                <div className="ratings text-center">
                    <span className="tweaked-margin">{reviewCount} reviews</span>
                    {ReviewsComponent.getStarts(score)}
                </div>
            )
        }
    }

    static getStarts(rating) {
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

    static returnWide(content) {
        return (
            <div className="ratings">
                <div className="thumbnail">
                    {ReviewsComponent.getStarts(2)}
                    <br/>
                    {content}
                </div>
                <div className="thumbnail">
                    {ReviewsComponent.getStarts(1)}
                    <br/>
                    {content}
                </div>
                <div className="thumbnail">
                    {ReviewsComponent.getStarts(3)}
                    <br/>
                    {content}
                </div>
                <div className="thumbnail">
                    {ReviewsComponent.getStarts(2)}
                    <br/>
                    {content}
                </div>
            </div>
        )
    }
}