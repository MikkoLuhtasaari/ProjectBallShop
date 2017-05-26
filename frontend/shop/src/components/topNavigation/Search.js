import React from 'react';
import Client from "../../Client";

/**
 * Controls the search at top navigation
 *
 * @author      Sofia Piekkola
 * @version     4.0
 */
export default class Search extends React.Component {
    /**
     * State of the object
     * @type {{searchString: string, balls: Array}}
     */
    state = { searchString: '', balls: [] };

    /**
     * Change hadler that detects writing and changes search list
     *
     * @param e current search string
     */
    handleChange = (e) => {
        this.setState({searchString: e.target.value});
    };

    /**
     * Creates unique key to list
     *
     * @type {number}
     */
    keynum = 0;

    /**
     * Array of all the balls in database
     *
     * @type {Array}
     */
    ballsArray = [];

    /**
     * Constructs the component and creates a client and retrieves all the balls.
     *
     * @param props props to be sent to super
     */
    constructor(props) {
        super(props);
        this.client = new Client();

        this.client.ballsByType("netsportsballs").then((b) => this.setState({balls: b}));
        this.client.ballsByType("batandraquetsgames").then((b) => this.setState({balls: b}));
        this.client.ballsByType("goalsportsballs").then((b) => this.setState({balls: b}));
        this.client.ballsByType("targetsportsballs").then((b) => this.setState({balls: b}));

    }

    /**
     * Renders search and result values
     *
     * @returns {*}
     */
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

    /**
     * Adds balls to balls array if not already on it.
     *
     * @param b ball to be added
     */
    addToArray(b) {
        if (!this.ballsArray.includes(b)) {
            this.ballsArray.push(b)
        }
    }

    /**
     * Returns list of items that are constant with search string or empty search field if nothing is being searched.
     *
     * @param length length of the string that is being searched
     * @param tempArray temporary array that holds all the balls that conduct with search string
     * @param keynum variable to set different key to all list items
     * @returns {XML}
     */
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
                            return (
                                <li key={keynum} className="list-unstyled">
                                    <a href={link} onClick={() => this.setState({searchString: ""})}>
                                        {i.manufacturer} {i.name}
                                        </a>
                                </li>
                            );
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
