import React from 'react';
import '../css/navbar.css'

class Navbar extends React.Component {
  render() {
    return (
      <navbar className="navbar__holder">
        <ul className="navbar__list">
          <li className="navbar__items"><strong className="navbar__highlight">00</strong>Home</li>
          <li className="navbar__items"><strong className="navbar__highlight">01</strong>Destination</li>
          <li className="navbar__items"><strong className="navbar__highlight">02</strong>Crew</li>
          <li className="navbar__items"><strong className="navbar__highlight">03</strong>Technology</li>
        </ul>
      </navbar>
    )
  }
}

export default Navbar;
