import React from 'react';
import Client from "../Client";

export default class SearchComponent extends React.Component {
    state = { searchString: '', balls: [] };
    handleChange = (e) => {
        this.setState({searchString: e.target.value});
    };
    keynum = 0;
    ballsArray = [];

    constructor(props) {
        super(props);
        this.client = new Client();

        this.client.ballsByType("netsportsballs").then(b => this.setState({balls: b}));
        this.client.ballsByType("batandraquetsgames").then(b => this.setState({balls: b}));
        this.client.ballsByType("goalsportsballs").then(b => this.setState({balls: b}));
        this.client.ballsByType("targetsportsballs").then(b => this.setState({balls: b}));
    }

    render() {
        let tempArray = this.ballsArray;
        this.state.balls.map(b => this.ballsArray.push(b));
        let searchString = this.state.searchString;
        if (searchString.length > 0){
            tempArray = this.ballsArray.filter(function (i) {
                if (i.name.toLowerCase().match(searchString.toLocaleLowerCase())) return true;
                else return !!i.manufacturer.toLowerCase().match(searchString.toLowerCase());
            });
        }
        return this.toReturn(searchString.length, tempArray, this.keynum);
    }

    toReturn(length, tempArray, keynum) {
        if (length > 0) {
            return (
                <div key={"dsa"} className="input-group">
                    <input type="text" value={this.state.searchString} onChange={this.handleChange}
                           className="search-box" placeholder="Search"/>
                    <button type="submit" className="btn"><span className="glyphicon glyphicon-search"/></button>
                    <ul>
                        {tempArray.map(function (i) {
                            keynum++;
                            let url = "/#/" + i.type + "/" + i.id;
                            return <li key={keynum} className="list-unstyled"><a href={url}>{i.manufacturer} {i.name}</a></li>;
                        })}
                    </ul>
                </div>
            )
        }else {
            return (
                <div key={"dsa"} className="input-group">
                    <input type="text" value={this.state.searchString} onChange={this.handleChange}
                           className="search-box" placeholder="Search"/>
                    <button type="submit" className="btn"><span className="glyphicon glyphicon-search"/></button>
                </div>
            );
        }
    }
}
