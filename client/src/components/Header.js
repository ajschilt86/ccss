import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
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
      <div className="titleBody">
      <nav className="pt-navbar">
        {
          this.props.authenticated
          ? (
            <div className="pt-navbar-group pt-align-right">
              <h1 className="title">Chicago Community Skill Share</h1>
              <a href="/profile"><button className="pt-button pt-minimal pt-icon-annotation">Questionnaire</button></a>
              <Link className="pt-button pt-minimal pt-icon-log-out logButton" to="/logout" aria-label="Log Out">Logout</Link>             
            </div>
          )
            : (
              <div className="pt-navbar-group pt-align-right">
                <h1 className="title">Chicago Community Skill Share</h1>
                <Link className="pt-button pt-intent-primary logButton" to="/login" style={{color: "black"}}>Register/Log In</Link>
              </div>
            )
        }
      </nav>
      </div>
    );
  }
}

export default Header;
