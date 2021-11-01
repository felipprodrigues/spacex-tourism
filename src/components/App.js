import React from 'react';
import Navbar from './Navbar.js'
import '../css/hero.css'

class App extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__navbar navbar">
          <hr className="navbar__line--horizontal"></hr>
          <Navbar />
        </div>
      </div>
    )
  }
}

export default App;
