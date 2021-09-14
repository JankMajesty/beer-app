import React from "react";
import Beer from "./components/Beer";

const URL = 'https://api.punkapi.com/v2/beers';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: [],
    };
  }
  
  componentDidUpdate() {
    console.log('UPDATED', this.state.beers);
  }


  // Async/Await
async componentDidMount() {
  console.log("MOUNTED", this.state.beers);

  try {
    const res = await fetch(URL);
    const data = await res.json();
    this.setState({
          beers: data,
    });

  } catch{
    console.error('I have failed')
  }
}

// PROMISES

// componentDidMount() {
//   console.log("MOUNTED", this.state.beers);
  
//   fetch(URL)
//   .then((response) => response.json())
//   .then((data) => 
//   this.setState({
//     beers: data,
//     })
//   );
// }

  render() {
  return <ul>
    {this.state.beers.map((beer) => {
      return <Beer singleBeer = {beer} />;
    })}
  </ul>
  }
}

export default App;
