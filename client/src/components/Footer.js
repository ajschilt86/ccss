import React, { Component } from 'react';
import "./Footer.css"

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

  render() {
    return (
      <footer className="footer">
        <ul className="site-link">
          <li>
            &copy; {this.state.year} CCSS
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
