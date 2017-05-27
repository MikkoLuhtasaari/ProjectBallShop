import React from 'react';
import Client from "../../Client";

/**
 * Styles of item form
 * @type {{form: {marginLeft: string, width: string, textAlign: string},
 * row: {width: string, marginLeft: string, paddingTop: string, paddingBottom: string, textAlign: string},
 * title: {width: string, display: string}, input: {width: string, display: string},
 * submitButton: {marginTop: string}}}
 */
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
    width: '70%',
    display:'inline-block'
  },
  submitButton: {
    marginTop:'30px'
  }
};

/**
 * Displays form that is used to add items to database.
 *
 * @author      Pasi Saikkonen
 * @version     4.0
 */
export default class ItemForm extends React.Component{
  constructor(props) {
    super(props);
      this.client = new Client();

    this.state = {
        formAction: '#/group/' + props.category + "s",
        html: window.location.origin + "/" + props.category
    };
  }

    /**
     * Renders class and returns HTML form to be displayd at page.
     *
     * @returns {XML}
     */
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
          <input id="submit" type="submit" style={styles.submitButton} onClick={() => this.sendDataToDatabase()}/>
        </form>
      </div>
    );
  }

    /**
     * Sends all given information to database
     */
    sendDataToDatabase() {
        let container = document.getElementById('myForm');
        let inputs = container.getElementsByTagName('input');
        let obj = {};
        for (let index = 0; index < inputs.length; ++index) {
            if (inputs[index].id !== "submit" && inputs[index].id !== "runn") obj[inputs[index].id] = inputs[index].value;
        }
        this.client.addItemToDatabase(obj, this.props.category);
  }
}