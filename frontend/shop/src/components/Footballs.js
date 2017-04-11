import React from 'react'; import Client from '../Client'

export default class Footballs extends React.Component{

    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {footballs : []};
        this.client.footballs().then(r => this.setState({footballs:r}));
    }

    render(){
        return(
            <section>
                {
                    this.state.footballs.map(fb => Footballs.createContent(fb))
                }
            </section>
        )
    }

    static createContent(fbObject) {
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
                <div class="ball_floated_img" style={div_style}>
                    <img src="../../images/Foot.jpg" alt="Ball" style={img_style} />
                    <h4>{fbObject.name} {fbObject.color}</h4>
                    <h6>{fbObject.details}</h6>
                    <h2>15,95€</h2>
                </div>
            )
        return propArray;
    }
}