import React from 'react'; import Client from '../Client'

export default class Chocolateballs extends React.Component{

    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {chocolateballs : []};
        this.client.chocolateballs().then(r => this.setState({chocolateballs:r}));
    }

    render(){
        return(
            <section>
                {
                    this.state.chocolateballs.map(fb => Chocolateballs.createContent(fb))
                }
            </section>
        )
    }

    static createContent(fbObject) {
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
                <img src="../../images/Chocolate.png" alt="Ball" style={img_style} />
                <h4>{fbObject.name} {fbObject.color}</h4>
                <h6>{fbObject.details}</h6>
                <h2>15,95€</h2>
            </div>
        )
        return propArray;
    }
}