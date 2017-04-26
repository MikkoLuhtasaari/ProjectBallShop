import React from 'react';
import ItemForm from './ItemForm.js'

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

export default class AddItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      target:'none'
    };
    this.manageClick = this.manageClick.bind(this);
  }

  manageClick(e) {
    this.setState({target:e.target.id});
  }

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