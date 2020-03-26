import React, { Component } from "react";

class Header extends Component {
  state = {
    hText: "Chuck Norris Quotes."
  }
  render() {
    const {hText} = this.state;
    return (
      <div className="header">
        <p>{hText}</p>
      </div>
    );
  }
}

export default Header;
