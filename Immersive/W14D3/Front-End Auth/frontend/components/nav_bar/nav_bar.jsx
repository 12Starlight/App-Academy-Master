import React from 'react';
import { Link } from 'react-router-dom';

// destructuring currentUser and logout, getting from our navbar container
export default ({ currentUser, logout }) => {
  /*
    If we have a currentUser, we want to display maybe a greeting and a way 
    to logout

    If we do not have a currentUser, we want to give them a way to login
  */ 
  const display = currentUser ? ( 
    <div>
      {/* instead of returning two links, we want to return a greeting */}
      <p>Hello, { currentUser.username }</p>
      {/* we want to return a logout button */}
      <button onClick={ logout }>Log Out</button>
    </div>
  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  ); 

  return (
    <header className="nav-bar">
      <h1 className="logo">BLUEBIRD</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
