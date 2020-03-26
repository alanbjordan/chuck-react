import React, { Component } from "react";

class Header extends Component {
  render() {
    const {hText} = this.props;
    return (
      <div className="header">
        <p>{hText}</p>
      </div>
    );
  }
}

export default Header;
