import React, { Component } from "react";

class ChuckQuote extends Component {
  state = {
    quote: "Requesting a Chuck Norris quote...",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Chuck_Norris_May_2015.jpg/220px-Chuck_Norris_May_2015.jpg"
  }

  async componentDidMount() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random?category=animal');
        const data = await response.json();    
        this.setState({
          quote: data.value,
          image: data.icon_url
        })
    } catch (error) {
        this.setState({
          quote: error.message,
          image: error.message
        })
    }
}


  render() {
    const { quote } = this.state;
    const { image } = this.state;
    return (
      <div className="theQuote">
        <p>{quote}</p>
        <img src={image}/>
      </div>
    );
  }
}

export default ChuckQuote;
