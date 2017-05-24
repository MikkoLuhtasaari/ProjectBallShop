import React from 'react';
import BallHandler from '../pageContent/BallHandler'

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
        <BallHandler group={"targetsportsballs"}/>
        <BallHandler group={"goalsportsballs"}/>
        <BallHandler group={"batandraquetsgames"}/>
        <BallHandler group={"netsportsballs"}/>
      </div>
    );
  }
}