import React from 'react';

export default class BallImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageSrc: props.imageSrc,
      imageFound: false
    };
    this.setDefaultImage = this.setDefaultImage.bind(this);
  }

  setDefaultImage() {
    this.setState({imageSrc:'../../images/items/no_image.png'})
  }

  render() {
    console.log("render");
    console.log(this.state.imageSrc)
    return (
      <img id={this.props.id} src={this.state.imageSrc } onError={this.setDefaultImage} className="img-responsive"
           alt="Ball"/>
    )
  }
}