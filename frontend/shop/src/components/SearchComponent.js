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

        this.client.ballsByType("netsportsballs").then((b) => this.setState({balls: b}));
        this.client.ballsByType("batandraquetsgames").then((b) => this.setState({balls: b}));
        this.client.ballsByType("goalsportsballs").then((b) => this.setState({balls: b}));
        this.client.ballsByType("targetsportsballs").then((b) => this.setState({balls: b}));

    }

    render() {
        this.state.balls.map((b) => this.addToArray(b));
        let tempArray = this.ballsArray;
        let searchString = this.state.searchString;
        if (searchString.length > 0){
            tempArray = this.ballsArray.filter((i) => {
                if (i.name.toLowerCase().match(searchString.toLocaleLowerCase())) return true;
                else return !!i.manufacturer.toLowerCase().match(searchString.toLowerCase());
            });
        }
        return this.toReturn(searchString.length, tempArray, this.keynum);
    }

    addToArray(b) {
        if (!this.ballsArray.includes(b)) {
            this.ballsArray.push(b)
        }
    }

    toReturn(length, tempArray, keynum) {
        if (length > 0) {
            return (
                <div key={"dsa"} className="input-group">
                    <input type="text" value={this.state.searchString} onChange={this.handleChange}
                           className="search-box" placeholder="Search"/>
                    <button type="submit" className="btn"><span className="glyphicon glyphicon-search"/></button>
                    <ul>
                        {tempArray.map((i) => {
                            keynum++;
                            let category = i.category.replace(/ /g,'').toLowerCase();
                            if(!category.includes("game"))category += "sball";
                            let link = "/#/details/" + category + "/" + i.id;
                            return <li key={keynum} className="list-unstyled"><a href={link} onClick={() => this.setState({searchString: ""})}>{i.manufacturer} {i.name}</a></li>;
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
