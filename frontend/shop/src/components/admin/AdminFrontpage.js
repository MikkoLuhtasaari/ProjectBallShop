import React from 'react';
import BallComponent from '../BallComponent'

const styles = {
  button: {
    width:'20%',
    marginLeft:'40%',
    padding:'20px',
    backgroundColor:'white',
    color:'green',
    border:'2px solid green',
    borderRadius: '15px',
    marginTop:'30px'
  }
};

export default class AdminFrontpage extends React.Component{
  render(){
    return (
      <div>
        <a href="/#/admin/add"><button style={styles.button} > ADD ITEM </button></a>
        <BallComponent group={"targetsportsballs"}/>
        <BallComponent group={"goalsportsballs"}/>
        <BallComponent group={"batandraquetsgames"}/>
        <BallComponent group={"netsportsballs"}/>
      </div>
    );
  }
}