import React from 'react';
import Client from '../../Client';
import { browserHistory } from 'react-router';
import {Storage_addToCart} from "../../Storage";
/**
 * Styles for AdminItemDetailsComponent
 * @type {{isModified: {color: string, display: string, paddingRight: string, margin: string,
 * fontSize: string, fontWeight: string}, textField: {resize: string}}}
 */
const styles = {
  isModified: {
    color:'red',
    display:'inline-block',
    paddingRight:'10px',
    margin:'0',
    fontSize:'22px',
    fontWeight:'600'
  },
  textField: {
    resize:'none'
  }
};

/**
 * Enables admin to edit item details or remove item from database
 *
 * @author      Pasi Saikkonen
 * @version     4.0
 */
export default class AdminItemDetailsComponent extends React.Component{
  constructor(props) {
    super(props);
    this.client = new Client();
    this.state = {
      ball : '',
      editName: false,
      editColor: false,
      editDiameter: false,
      editWeight: false,
      editManufacturer: false,
      editCategory: false
    };
    this.client.ballById(this.props.params.group, this.props.params.id).then(b => this.setState({ball: b }));
    this.onFocus = this.onFocus.bind(this);
    this.generateListItems = this.generateListItems.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.updateData = this.updateData.bind(this);
    this.deleteButtonListener = this.deleteButtonListener.bind(this);
    this.parseCategory = this.parseCategory.bind(this);
  }

    /**
     * Listens if delete is pressed and removes item from database.
     */
  deleteButtonListener() {
    let targetUrl = 'http://localhost:8080/' + this.parseCategory() + '/' + this.state.ball.id;
    fetch(targetUrl,
      {
        method: 'delete',
        mode: 'cors'
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });

    browserHistory.push('/#admin');
    location.reload();
  }

    /**
     * Enables field edition if field is selected
     *
     * @param e field to be edited
     */
  onFocus(e) {
    switch(e.target.id) {
      case 'name':
        this.setState({editName: true});
        break;
      case 'color':
        this.setState({editColor: true});
        break;
      case 'diameter':
        this.setState({editDiameter: true});
        break;
      case 'weight':
        this.setState({editWeight: true});
        break;
      case 'manufacturer':
        this.setState({editManufacturer: true});
        break;
      case 'category':
        this.setState({editCategory: true});
        break;
      default:
        console.error("Could not find the id: " + e.target.id);
    }
  }

    /**
     * Detects witch field has been edited and moves to put it to database
     *
     * @param e information that has been edited
     */
  onBlur(e) {
    let updatedBall = this.state.ball;
    switch(e.target.id) {
      case 'name':
        if(e.target.value.length > 0) {
          updatedBall.name = e.target.value;
          this.setState({ball: updatedBall});
        }
        this.setState({editName: false});
        break;
      case 'color':
        if(e.target.value.length > 0) {
          updatedBall.color = e.target.value;
          this.setState({ball: updatedBall});
        }
        this.setState({editColor: false});
        break;
      case 'diameter':
        if(e.target.value.length > 0) {
          updatedBall.diameter = e.target.value;
          this.setState({ball: updatedBall});
        }
        this.setState({editDiameter: false});
        break;
      case 'weight':
        if(e.target.value.length > 0) {
          updatedBall.weigth = e.target.value;
          this.setState({ball: updatedBall});
        }
        this.setState({editWeight: false});
        break;
      case 'manufacturer':
        if(e.target.value.length > 0) {
          updatedBall.manufacturer = e.target.value;
          this.setState({ball: updatedBall});
        }
        this.setState({editManufacturer: false});
        break;
      case 'category':
        if(e.target.value.length > 0) {
          updatedBall.category = e.target.value;
          this.setState({ball: updatedBall});
        }
        this.setState({editCategory: false});
        break;
      default:
        console.error("Couldnt find the id " + e.target.id);
    }
    this.updateData();
  }

    /**
     * Finishes editing a field by pressing enter
     */
  onKeyPress(e) {
    let charCode = e.which || e.keyCode;
    if(charCode === 13) {
      this.onBlur(e);
    }
  }

    /**
     * Detects the route category of a ball
     *
     * @returns {*}
     */
  parseCategory() {
    switch(this.state.ball.category) {
      case 'Target sport':
        return 'targetsportsball';
      case 'Net sport':
        return 'netsportsball';
      case 'Bat and raquets game':
        return 'batandraquetsgame';
      case 'Goal sport':
        return 'goalsportsball';
      default:
        return undefined;
    }
  }

    /**
     * Updates data to backend
     */
  updateData() {
    let targetUrl = 'http://localhost:8080/';
    let ball = this.state.ball;

    targetUrl += this.parseCategory();

    fetch(targetUrl,
      {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify({
          "amount": ball.amount,
          "color": ball.color,
          "name": ball.name,
          "weigth": ball.weigth,
          "details": ball.details,
          "material": ball.material,
          "manufacturer": ball.manufacturer,
          "shortDetails": ball.shortDetails,
          "type": ball.type,
          "price": ball.price
        })
      })
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

    /**
     * Displays list of detail names and input fields
     *
     * @returns {Array}
     */
  generateListItems() {
    let jsx = [];

    // Name
    if(!this.state.editName) {
      jsx.push(<li key={jsx.length} id="name" onClick={this.onFocus}>Name: {this.state.ball.name}</li>);
    } else {
      jsx.push(<p style={styles.isModified}>Name:</p>);
      jsx.push(<input type="text" style={styles.textField} id="name" onBlur={this.onBlur} autoFocus="true" onKeyPress={this.onKeyPress} placeholder={this.state.ball.name} />);
    }

    // Color
    if(!this.state.editColor) {
      jsx.push(<li key={jsx.length + "c"} id="color" onClick={this.onFocus}>Color: {this.state.ball.color}</li>);
    } else {
      jsx.push(<p style={styles.isModified}>Color: </p>);
      jsx.push(<input type="text" style={styles.textField} id="color" onBlur={this.onBlur} autoFocus="true" onKeyPress={this.onKeyPress} placeholder={this.state.ball.color} />);
    }

    // Diameter
    if(!this.state.editDiameter) {
      jsx.push(<li key={jsx.length + "d"} id="diameter" onClick={this.onFocus}>Diameter: {this.state.ball.diameter}</li>);
    } else {
      jsx.push(<p style={styles.isModified}>Diameter: </p>);
      jsx.push(<input type="text" style={styles.textField} id="diameter" onBlur={this.onBlur} autoFocus="true" onKeyPress={this.onKeyPress} placeholder={this.state.ball.diameter} />);
    }

    // Weight
    if(!this.state.editWeight) {
      jsx.push(<li key={jsx.length + "w"} id="weight" onClick={this.onFocus}>Weight: {this.state.ball.weigth}</li>);
    } else {
      jsx.push(<p style={styles.isModified}>Weight: </p>);
      jsx.push(<input type="text" style={styles.textField} id="weight" onBlur={this.onBlur} autoFocus="true" onKeyPress={this.onKeyPress} placeholder={this.state.ball.weigth} />);
    }

    // Manufacturer
    if(!this.state.editManufacturer) {
      jsx.push(<li key={jsx.length + "m"} id="manufacturer" onClick={this.onFocus}>Manufacturer: {this.state.ball.manufacturer}</li>);
    } else {
      jsx.push(<p style={styles.isModified}>Manufacturer: </p>);
      jsx.push(<input type="text" style={styles.textField} id="manufacturer" onBlur={this.onBlur} autoFocus="true" onKeyPress={this.onKeyPress} placeholder={this.state.ball.manufacturer} />);
    }

    // Category
    if(!this.state.editCategory) {
      jsx.push(<li key={jsx.length + "cat"} id="category" onClick={this.onFocus}>Category: {this.state.ball.category}</li>);
    } else {
      jsx.push(<p style={styles.isModified}>Category: </p>);
      jsx.push(<input type="text" style={styles.textField} id="category" onBlur={this.onBlur} autoFocus="true" onKeyPress={this.onKeyPress} placeholder={this.state.ball.category} />);
    }

    return jsx;
  }

    /**
     * Renders component and returns content as HTML to display to admin
     *
     * @returns {XML}
     */
  render(){
    const ball = this.state.ball;
    let imageSrc = "../../images/items/"+ ball.type + "_" + ball.id + ".png";
    const http = new XMLHttpRequest();
    http.open('HEAD', "../../images/items/"+ ball.type + "_" + ball.id + ".png", false);
    http.send();
    if(http.status !== 404) imageSrc = "../../images/items/"+ ball.type + "_" + ball.id + ".png";
    else imageSrc = "../../images/items/no_image.png";
    let onStock = "This item is out of stock";
    let ikon = "glyphicon glyphicon-remove-circle";
    let colorId = "red";
    let buttonId = "btn disabled";
    if(ball.amount > 0){
      onStock = "On stock";
      ikon = "glyphicon glyphicon-ok-circle";
      colorId = "green";
      buttonId = "btn btn-success active";
    }
    return(
      <section>
        {
          <div className="container">
            <div className="row" id="centerAll">
              <div className="col-xs-4 item-photo">
                <img alt="item" id="wideImg" src={imageSrc} />
              </div>
              <div className="col-xs-5">
                <h3>{ball.manufacturer} {ball.type}</h3>
                <h5 id="padBot">{ball.shortDetails}</h5>
                <h3>{ball.price} €</h3>
                  {this.addToCart(buttonId)}
                <span id={colorId}>
                                    <span className={ikon}/>
                                    <span id="shopItem">{onStock}</span>
                                </span>
              </div>
              <div className="col-xs-9" id="wideDiv">
                <div>
                  <p id="pad15" className="text-center">
                    <small>
                      {ball.details}
                    </small>
                  </p>
                  <ul>
                    {this.generateListItems()}
                  </ul>
                  <button className="deleteButton" onClick={this.deleteButtonListener} >Delete item</button>
                </div>
              </div>
            </div>
          </div>
        }
      </section>
    )
  }

    /**
     * Adds "add to cart" button
     *
     * @param buttonId
     * @returns {XML}
     */
    addToCart(buttonId){
        if (this.state.ball.amount > 0) {
            return (
                <div className="section" id="botBad">
                    <button className={buttonId} onClick={ () => {this.itemAdded(this.state.ball)} }>
                        <span id="marginR20" className="glyphicon glyphicon-shopping-cart" aria-hidden="true"/>
                        Add to cart
                    </button>
                </div>
            )
        }
    }

    /**
     * Adds item to cart
     *
     * @param ball item that is to be added to cart
     * @returns {*}
     */
    itemAdded(ball){
        Storage_addToCart(ball);
        let handleUpdate = this.props.handleUpdate;
        return handleUpdate(true);
    }
}