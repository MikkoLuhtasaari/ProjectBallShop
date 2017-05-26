import React from 'react';
import ItemForm from './ItemForm.js'

/**
 * Styles for AddItem page
 * @type {{button: {width: string, height: string, color: string, margin: string, border: string,
 * borderRadius: string, background: string, fontSize: string}, row: {textAlign: string}, heading:
 * {textAlign: string, marginBottom: string, fontSize: string}}}
 */
const styles = {
  button: {
    width:'200px',
    height:'150px',
    color:'white',
    margin:'8px',
    border:'2px solid gray',
    borderRadius:'15px',
    background:'#323232',
    fontSize:'16px'
  },
  row: {
    textAlign:'center'
  },
  heading: {
    textAlign:'center',
    marginBottom:'20px',
    fontSize:'36px'
  }
};

/**
 * Routes admin to add items to database.
 *
 * @author      Pasi saikkonen
 * @version     4.0
 */
export default class AddItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      target:'none'
    };
    this.manageClick = this.manageClick.bind(this);
  }

    /**
     * Manages clicking of the buttons and directs user to correct adding page
     *
     * @param e target where to direct user
     */
  manageClick(e) {
    this.setState({target:e.target.id});
  }

    /**
     * Renders class.
     *
     * If target is not given, displays buttons. Else redirects user to ItemForm
     *
     * @returns {XML}
     */
  render() {
    if(this.state.target === 'none') {
      return (
        <div>
          <h3 style={styles.heading}>Add Item</h3>
          <div style={styles.row}>
            <button style={styles.button} onClick={this.manageClick} id="netsportsball">Net sports</button>
            <button style={styles.button} onClick={this.manageClick} id="batandraquetsgame">Bat and Racket sports</button>
          </div>
          <div style={styles.row}>
            <button style={styles.button} onClick={this.manageClick} id="goalsportsball">Goal sports</button>
            <button style={styles.button} onClick={this.manageClick} id="targetsportsball">Target sports</button>
          </div>
        </div>
      );
    } else {
      return (
        <ItemForm category={this.state.target} />
      )
    }
  }
}