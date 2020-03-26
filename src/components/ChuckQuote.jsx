import React, { Component } from "react";

class ChuckQuote extends Component {
  state = {
    quote: "Requesting a Chuck Norris quote..."
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        quote: "Chuck Norris threw a grenade and killed 50 people, then it exploded."
      })
    }, 3000);
  }

  render() {
    const { quote } = this.state;
    return (
      <div className="theQuote">
        <p>{quote}</p>
      </div>
    );
  }
}

export default ChuckQuote;
