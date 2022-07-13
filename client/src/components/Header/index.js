import React from 'react';
import { Link } from 'react-router-dom';
import "../../../src/index.css";
import Auth from '../../utils/auth';


const Header = () => {

  // logout function
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <header className="bg-primary text-decoration-none text-danger text-center mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to='/'>
          <h1>Reel Me In 2.0</h1>
        </Link>

        <nav className='text-right'>
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile" className='px-2'>My Profile</Link>
              <Link to='/newreview' className='px-2'>Create Review</Link>
              <a href='/' className='px-2' onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
            <Link to='/login' className='px-2'>Login</Link>
            
            <Link to='/signup' className='px-2'>Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
