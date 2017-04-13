import React from 'react'; import Client from '../Client'

export default class BallComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {balls: []};
        if (props.group !== undefined) this.client.balls(props.group).then(b => this.setState({balls: b}));
        else if (props.params.type !== undefined) this.client.ball(props.params.group, props.params.type).then(b => this.setState({balls: b}));
        else this.client.balls(props.params.group).then(b => this.setState({balls: b}));
    }
    render(){
        return(
            <section>
                {
                    this.state.balls.map(b => BallComponent.createContent(b))
                }
            </section>
        )
    }

    static createContent(ballObject) {
        const propArray = [];
        const div_style = {
            float: "left",
            display: "inline-block",
            padding: 30,
            width: "20%",
            textAlign: "center"
        };
        const img_style = {
            width: "100%"
        };
        propArray.push(
            <div style={div_style}>
                <img src="../../images/Foot.png" alt="Ball" style={img_style} />
                <h4>{ballObject.manufacturer} {ballObject.type}</h4>
                <h6>{ballObject.shortDetails}</h6>
                <h2>15,95€</h2>
            </div>
        )
        return propArray;
    }
}