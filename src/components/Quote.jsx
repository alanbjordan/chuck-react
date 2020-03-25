import React, { Component } from "react";

class Quote extends Component {
  render() {
    return (
      <div className="quote">
        <br />
        <select id="type">
          <option value="funny">Funny</option>
          <option value="sad">Sad</option>
          <option value="explicit">Explicit</option>
        </select>
        <button type="button">Submit</button>
        <p>Chuck Says...</p>
      </div>
    );
  }
}

export default Quote;