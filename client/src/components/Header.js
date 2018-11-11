import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Popover, PopoverInteractionKind, Position } from '@blueprintjs/core'

class Header extends Component {
  constructor(props) {
    super(props)
    this.closePopover = this.closePopover.bind(this)
    this.state = {
      popoverOpen: false
    }
  }

  closePopover() {
    this.setState({ popoverOpen: false })
  }

  render() {
    return (
      <nav className="pt-navbar">
        {
          this.props.authenticated
          ? (
            <div className="pt-navbar-group pt-align-right">
              <h1>Chicago Community Skill Share</h1>
              <Link className="pt-button pt-minimal pt-icon-log-out" to="/logout" aria-label="Log Out">Logout</Link>
            </div>
          )
            : (
              <div className="pt-navbar-group pt-align-right">
                <h1>Chicago Community Skill Share</h1>
                <Link className="pt-button pt-intent-primary" to="/login" style={{color: "black"}}>Register/Log In</Link>
              </div>
            )
        }
      </nav>
    );
  }
}

export default Header;
