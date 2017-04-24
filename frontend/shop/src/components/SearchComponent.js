import React from 'react';
import Client from '../Client';

export default class SearchComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            updated:false
        };
    }

    render(){
        return(
            <div className="input-group">
                <input type="text" className="search-box" placeholder="Search"/>
                <button type="submit" className="btn"><span className="glyphicon glyphicon-search"/></button>
            </div>
        )
    }
}
