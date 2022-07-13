import React from 'react';
import { Link } from 'react-router-dom';
import "../../../src/index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-text">
        <Link to='/'>
          <h1>Reel Me In 2.0</h1>
        </Link>

        <nav className='link-text'>
          <Link to='/login'>Login</Link>
          
          <Link to='/signup'>Signup</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
