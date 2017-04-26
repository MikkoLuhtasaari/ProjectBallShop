import React from 'react';

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

//TODO: send form data in JSON

export default class ItemForm extends React.Component{
  constructor(props) {
    super(props);
    console.log('http://localhost:8080/' + props.category);
    this.state = {
      formAction:'http://localhost:8080' + props.category
    };
  }

  render(){
    return (
      <div>
        <form style={styles.form} action={this.state.formAction} method="post">
          <div style={styles.row}>
            <div style={styles.title}>Name</div>
            <input style={styles.input} type="text"/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Color</div>
            <input style={styles.input} type="text"/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Diameter</div>
            <input style={styles.input} type="text"/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Weight</div>
            <input style={styles.input} type="text"/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Details</div>
            <input style={styles.input} type="text"/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Material</div>
            <input style={styles.input} type="text"/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Manufacturer</div>
            <input style={styles.input} type="text"/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Short Details</div>
            <input style={styles.input} type="text"/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Type</div>
            <input style={styles.input} type="text"/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Price</div>
            <input style={styles.input} type="text"/>
          </div>
          <div style={styles.row}>
            <div style={styles.title}>Amount</div>
            <input style={styles.input} type="text"/>
          </div>
          <input style={styles.submitButton} type="submit"/>
        </form>
      </div>
    );
  }
}