
import React, { Component } from "react";


class Beer extends Component{
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (

      <li>
        <img 
        style = {{ height: "200px" }}
        src= {this.props.singleBeer.image_url} 
        alt={this.props.name}
        />
        <h2>{this.props.singleBeer.name}</h2>
        <h3>{this.props.singleBeer.tagline}</h3>
        <h3>First Brewed: {this.props.singleBeer.first_brewed}</h3>
        <h3>ABV: {this.props.singleBeer.abv}</h3>
        <h3>IBU: {this.props.singleBeer.ibu}</h3>
        <p>{this.props.singleBeer.description}</p>
        <button>Like</button>
      </li>
      
    );
  }
}

export default Beer;