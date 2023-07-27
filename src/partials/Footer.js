import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: "red" }}>hey im {this.props.footer}</h1>
      </div>
    );
  }
}

export default Footer;
