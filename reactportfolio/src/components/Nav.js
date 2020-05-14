import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link style={navStyle} to='/about'>
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
