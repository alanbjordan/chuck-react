import React, { Component } from "react";

class QuoteSelector extends Component {
  state = {
    chuckSays: "Chuck Says..."
  }
  render() {
    const { chuckSays } = this.state;
    return (
      <div className="quote">
        <br/>
        <select id="type">
          <option value="funny">Funny</option>
          <option value="sad">Sad</option>
          <option value="explicit">Explicit</option>
        </select>
        <button type="button">Submit</button>
        <p>{chuckSays}</p>
      </div>
    );
  }
}

export default QuoteSelector;
