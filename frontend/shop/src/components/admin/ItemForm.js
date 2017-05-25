import React from 'react';
import Client from "../../Client";

const styles = {
  form: {
    marginLeft:'10%',
    width:'80%',
    textAlign:'center'
  },
  row: {
    width:'50%',
    marginLeft:'25%',
    paddingTop:'5px',
    paddingBottom:'5px',
    textAlign:'left'
  },
  title: {
    width: '30%',
    display:'inline-block'
  },
  input: {
    width: '70%'
  },
  submitButton: {
    marginTop:'30px'
  }
};

export default class ItemForm extends React.Component{
  constructor(props) {
    super(props);
      this.client = new Client();

    this.state = {
        formAction: 'http://localhost:3000/#/group/' + props.category + "s",
        html:'http://localhost:8080/' + props.category
    };
  }

  render(){
    return (
      <div>
        <form id="myForm" style={styles.form} action={this.state.formAction}>
          <div style={styles.row}>
            <div style={styles.title}>Name</div>
            <input id="name" style={styles.input} type="text" required={true}/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Color</div>
            <input id="color" style={styles.input} type="text" required={true}/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Diameter</div>
            <input id="diameter" style={styles.input} type="number" required={true}/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Weight</div>
            <input id="weigth" style={styles.input} type="number" required={true}/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Details</div>
            <input id="details" style={styles.input} type="text" required={true}/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Material</div>
            <input id="material" style={styles.input} type="text" required={true}/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Manufacturer</div>
            <input id="manufacturer" style={styles.input} type="text" required={true}/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Short Details</div>
            <input id="shortDetails" style={styles.input} type="text" required={true}/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Type</div>
            <input id="type" style={styles.input} type="text" required={true}/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Price</div>
            <input id="price" style={styles.input} type="number" required={true}/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Amount</div>
            <input id="amount" style={styles.input} type="number" required={true}/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Image</div>
            <input id="image" style={styles.input} type="file" required={true} accept="image/*"/>
          </div>
          <input style={styles.submitButton} onClick={() => this.sendDataToDatabase(this.state.html)} type="submit"/>
        </form>
      </div>
    );
  }

    sendDataToDatabase(http) {
        let container = document.getElementById('myForm');
        let inputs = container.getElementsByTagName('input');
        let obj = {};
        for (let index = 0; index < inputs.length; ++index) {
          if (obj[inputs[index].id] !== "image") obj[inputs[index].id] = inputs[index].value;
          else this.sendImage(inputs[index].value);
        }
        this.client.addItemToDatabase(obj, this.props.category);
    }

    sendImage(value) {
        this.client.addImageToDatabase(value, this.props.category);
    }
}