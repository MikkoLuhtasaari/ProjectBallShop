import React from 'react';
import Client from '../Client';

export default class BallComponent extends React.Component{
    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            balls: [],
            updated:false
        };
        this.fetchItems = this.fetchItems.bind(this);
        this.fetchItems();
    }

    componentWillReceiveProps() {
        this.fetchItems();
        this.setState({updated:false});
    }

    componentDidUpdate() {
        if(!this.state.updated) {
          this.fetchItems();
          this.setState({updated:true});
        }
    }

    fetchItems() {
      if (this.props.group !== undefined) this.client.balls(this.props.group).then(b => this.setState({balls: b}));
      else if (this.props.params.type !== undefined) this.client.ball(this.props.params.group, this.props.params.type).then(b => this.setState({balls: b}));
      else this.client.balls(this.props.params.group).then(b => this.setState({balls: b}));
    }

    render(){
        return(
            <section id="allBalls">
                {
                    this.state.balls.map(b => BallComponent.createContent(b))
                }
            </section>
        )
    }

    static createContent(ballObject) {
         const propArray = [];
         let link = "http://localhost:3000/#/" + ballObject.type + "/" + ballObject.id;
         let imageSrc = "../../images/items/"+ ballObject.type + "_" + ballObject.id + ".png";
         propArray.push(
             <div className="col-sm-4 col-lg-4 col-md-4">

                     <div className="thumbnail">
                         <a href={link}><img id="ballImage" src={imageSrc} alt="Ball"/></a>
                         {/*option 1*/}
                     <h4 className="pull-right" id="itemPrice"><b>{ballObject.price}€</b></h4>
                         <div className="caption">
                             {/*option 2*/}
                             <h4 className="pull-right">{ballObject.price}€</h4>
                             <h4><a href={link}>{ballObject.manufacturer} {ballObject.type}</a></h4>
                             <p>{ballObject.shortDetails}</p>
                         </div>
                         <div className="ratings">
                             <p className="pull-right">6 reviews</p>
                             <p>
                                 <span className="glyphicon glyphicon-star"/>
                                 <span className="glyphicon glyphicon-star"/>
                                 <span className="glyphicon glyphicon-star"/>
                                 <span className="glyphicon glyphicon-star-empty"/>
                                 <span className="glyphicon glyphicon-star-empty"/>
                             </p>
                         </div>
                 </div>

             </div>
         );

        return propArray;
    }
}