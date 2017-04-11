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
        for (const property in fbObject) {
            propArray.push(
                <div className="ball">
                    {property}: {fbObject[property]}
                </div>
            )
        }
        return propArray;
    }
}