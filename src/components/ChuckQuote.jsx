import React, { Component } from "react";

class ChuckQuote extends Component {
  state = {
    quote: "Chuck Norris threw a grenade and killed 50 people, then it exploded."
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
