import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <h2>Mitchell Johnson</h2>
      <ul className="nav-links">
        <Link style={navStyle} to='/'>
          <li>About Me</li>
        </Link>
        <Link style={navStyle} to='/portfolio'>
          <li>Portfolio</li>
        </Link>
        <Link style={navStyle} to='/contact'>
          <li>Contact Me</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
