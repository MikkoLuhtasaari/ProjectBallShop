import React from 'react'; import Client from '../Client'

export default class Bowlingballs extends React.Component{

    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {bowlingballs : []};
        this.client.bowlingballs().then(r => this.setState({bowlingballs:r}));
    }

    render(){
        return(
            <section>
                {
                    this.state.bowlingballs.map(bb => Bowlingballs.createContent(bb))
                }
            </section>
        )
    }

    static createContent(bbObject) {
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
                <img src="../../images/Bowl.png" alt="Ball" style={img_style} />
                <h4>{bbObject.name} {bbObject.color}</h4>
                <h6>{bbObject.details}</h6>
                <h2>45,95€</h2>
            </div>
        )
        return propArray;
    }
}