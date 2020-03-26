import React, { Component } from "react";

class ChuckQuote extends Component {
  render() {
    const { quote } = this.props;
    return (
      <div className="theQuote">
        <p>{quote}</p>
      </div>
    );
  }
}

export default ChuckQuote;
