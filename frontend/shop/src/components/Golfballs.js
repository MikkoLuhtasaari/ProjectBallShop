import React from 'react'; import Client from '../Client'

export default class Golfballs extends React.Component{

    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {golfballs : []};
        this.client.golfballs().then(g => this.setState({golfballs:g}));
    }

    render(){
        return(
            <section>
                {
                    this.state.golfballs.map(gb => Golfballs.createContent(gb))
                }
            </section>
        )
    }

    static createContent(gbObject) {
        const propArray = [];
        const div_style = {
            float: "left",
            display: "inline-block",
            padding: 20,
            width: "20%",
            textAlign: "center"
        };
        const img_style = {
            width: "100%"
        };
        propArray.push(
            <div style={div_style}>
                <img src="../../images/Golf.png" alt="Ball" style={img_style} />
                <h4>{gbObject.name} {gbObject.color}</h4>
                <h6>{gbObject.details}</h6>
                <h2>15,95€</h2>
            </div>
        )
        return propArray;
    }
}